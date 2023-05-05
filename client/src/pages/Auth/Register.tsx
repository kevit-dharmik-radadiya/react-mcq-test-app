import { useState } from "react";
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
import { useAppDispatch } from "../../app/hook";
import { useNavigate } from "react-router-dom";
import { ROUTE_CONSTANTS_VARIABLE } from "../../constants/routeConstants";

const Register = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    username: "",
    error: {
      email: {
        status: true,
        message: ``,
      },
      password: {
        status: true,
        message: ``,
      },
      username: {
        status: true,
        message: ``,
      },
    },
    showPassword: false,
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onHandleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClickShowPassword = () => {
    setLoginForm((prevState) => ({
      ...prevState,
      showPassword: !loginForm.showPassword,
    }));
  };

  const onClickLogin = async () => {
    const isUsernameValid = usernameValidate("username", loginForm.username);
    const isEmailValid = isEmail("email", loginForm.email);
    const isPasswordValid = passwordValidate(
      "password",
      loginForm.password,
      true
    );
    setLoginForm((prevState) => ({
      ...prevState,
      error: {
        email: isEmailValid,
        password: isPasswordValid,
        username: isUsernameValid,
      },
    }));

    if (
      isUsernameValid.status &&
      isEmailValid.status &&
      isPasswordValid.status
    ) {
      const response = await dispatch(
        registerUser(
          {
            email: loginForm.email,
            password: loginForm.password,
            username: loginForm.username,
          },
          navigate
        )
      );
      if (!response) {
        setLoginForm((prevState) => ({
          ...prevState,
          password: "",
        }));
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
              value={loginForm.username}
              onChange={onHandleChangeInput}
              helperText={loginForm.error.username.message}
              error={!loginForm.error.username.status}
            />
          </FormControl>
          <FormControl>
            <Input
              variant="outlined"
              label="Email"
              name="email"
              type="email"
              placeholder="Email"
              value={loginForm.email}
              onChange={onHandleChangeInput}
              helperText={loginForm.error.email.message}
              error={!loginForm.error.email.status}
            />
          </FormControl>
          <FormControl>
            <Input
              variant="outlined"
              label="Password"
              name="password"
              type={loginForm.showPassword ? "text" : "password"}
              placeholder="Password"
              value={loginForm.password}
              onChange={onHandleChangeInput}
              helperText={loginForm.error.password.message}
              error={!loginForm.error.password.status}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} size="large">
                      {loginForm.showPassword ? (
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
