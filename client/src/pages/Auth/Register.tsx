import { FormControl, IconButton, InputAdornment } from "@mui/material";
import SignUp from "../../assets/images/backgrounds/Sign-Up.svg";
import AuthTemplate from "./authTemplate/AuthTemplate";
import Input from "../../components/input/Input";
import {
  isEmail,
  passwordValidate,
  usernameValidate,
} from "../../helpers/validationHelper";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { registerUser } from "../../store/actions/authAction";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { useNavigate } from "react-router-dom";
import { ROUTE_CONSTANTS_VARIABLE } from "../../constants/routeConstants";
import {
  setErrorStatus,
  setInputValues,
  showPassword,
} from "../../store/reducers/authValidateSlice";

const Register = () => {
  const authValidate: Record<string, any> = useAppSelector(
    ({ authValidate }: Record<string, any>) => authValidate ?? {}
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onHandleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch(setInputValues({ name, value }));
  };

  const handleClickShowPassword = () => {
    dispatch(showPassword(""));
  };

  const onClickLogin = async () => {
    const isUsernameValid = usernameValidate("username", authValidate.username);
    const isEmailValid = isEmail("email", authValidate.email);
    const isPasswordValid = passwordValidate(
      "password",
      authValidate.password,
      true
    );

    dispatch(
      setErrorStatus({ isEmailValid, isPasswordValid, isUsernameValid })
    );

    if (
      isUsernameValid.status &&
      isEmailValid.status &&
      isPasswordValid.status
    ) {
      const response = await dispatch(
        registerUser(
          {
            email: authValidate.email,
            password: authValidate.password,
            username: authValidate.username,
          },
          navigate
        )
      );
      if (!response) {
        dispatch(setInputValues({ name: "password", value: "" }));
      }
    }
  };

  return (
    <AuthTemplate
      title="Sign Up"
      subTitle="Sign Up in QuickQuiz to assess your knowledge."
      imageTitle="Hello, Welcome...!"
      imageSubTitle="To keep connected with us please Sign Up in QuickQuiz"
      authImage={SignUp}
      authImageWidth="400px"
      redirectLink={ROUTE_CONSTANTS_VARIABLE.LOGIN}
      redirectLinkText="Already have an Account?"
      redirectText="Sign In"
      buttonEvent={onClickLogin}
      buttonText="Sign Up"
    >
      {
        <div className="auth_form">
          <FormControl>
            <Input
              variant="outlined"
              label="Username"
              name="username"
              type="text"
              placeholder="Username"
              value={authValidate.username}
              onChange={onHandleChangeInput}
              helperText={authValidate.error.username.message}
              error={!authValidate.error.username.status}
            />
          </FormControl>
          <FormControl>
            <Input
              variant="outlined"
              label="Email"
              name="email"
              type="email"
              placeholder="Email"
              value={authValidate.email}
              onChange={onHandleChangeInput}
              helperText={authValidate.error.email.message}
              error={!authValidate.error.email.status}
            />
          </FormControl>
          <FormControl>
            <Input
              variant="outlined"
              label="Password"
              name="password"
              type={authValidate.showPassword ? "text" : "password"}
              placeholder="Password"
              value={authValidate.password}
              onChange={onHandleChangeInput}
              helperText={authValidate.error.password.message}
              error={!authValidate.error.password.status}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} size="large">
                      {authValidate.showPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
        </div>
      }
    </AuthTemplate>
  );
};

export default Register;
