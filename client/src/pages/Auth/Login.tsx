import { FormControl, IconButton, InputAdornment } from "@mui/material";
import SignIn from "../../assets/images/backgrounds/Sign-In.svg";
import AuthTemplate from "./authTemplate/AuthTemplate";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Input from "../../components/input/Input";
import { isEmail, passwordValidate } from "../../helpers/validationHelper";
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser } from "../../store/actions/authAction";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { ROUTE_CONSTANTS_VARIABLE } from "../../constants/routeConstants";
import {
  setErrorStatus,
  setInputValues,
  showPassword,
} from "../../store/reducers/authValidateSlice";

const Login = () => {
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
    const isEmailValid = isEmail("email", authValidate.email);
    const isPasswordValid = passwordValidate(
      "password",
      authValidate.password,
      true
    );

    dispatch(setErrorStatus({ isEmailValid, isPasswordValid }));

    if (isEmailValid.status && isPasswordValid.status) {
      const response = await dispatch(
        loginUser(
          { email: authValidate.email, password: authValidate.password },
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
      title="Sign In"
      subTitle="Sign In with your QuickQuiz account."
      imageTitle="Welcome Back :)"
      imageSubTitle="To keep connected with us please login with your personal info"
      authImage={SignIn}
      authImageWidth="400px"
      redirectText="Sign Up"
      redirectLink={ROUTE_CONSTANTS_VARIABLE.REGISTER}
      redirectLinkText="Don't have an Account?"
      buttonEvent={onClickLogin}
      buttonText="Sign In"
    >
      {
        <div className="auth_form">
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
          <div className="auth_forgot">
            <NavLink
              to={ROUTE_CONSTANTS_VARIABLE.FORGOT_PASSWORD}
              className="link decoration-none"
            >
              Forgot Password?
            </NavLink>
          </div>
        </div>
      }
    </AuthTemplate>
  );
};

export default Login;
