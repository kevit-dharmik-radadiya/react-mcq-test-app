import { useState } from "react";
import { FormControl, IconButton, InputAdornment } from "@mui/material";
import SignUp from "../../assets/images/backgrounds/Sign-Up.svg";
import { ROUTE_CONSTANTS_VARIABLE } from "../../routes/Routes";
import AuthTemplate from "./authTemplate/AuthTemplate";
import Input from "../../components/input/Input";
import {
  isEmail,
  passwordValidate,
  usernameValidate,
} from "../../helpers/validationHelper";
import { Visibility, VisibilityOff } from "@mui/icons-material";

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
    rememberMe: false,
  });

  const onHandleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const handleClickShowPassword = () => {
    setLoginForm({ ...loginForm, showPassword: !loginForm.showPassword });
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
        <div className="auth_form mt-2">
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
