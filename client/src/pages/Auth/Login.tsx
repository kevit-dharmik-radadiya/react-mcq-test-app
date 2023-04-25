import { useState } from "react";
import { FormControl, IconButton, InputAdornment } from "@mui/material";
import SignIn from "../../assets/images/backgrounds/Sign-In.svg";
import { ROUTE_CONSTANTS_VARIABLE } from "../../routes/Routes";
import AuthTemplate from "./authTemplate/AuthTemplate";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Input from "../../components/input/Input";
import { isEmail, passwordValidate } from "../../helpers/validationHelper";
import { NavLink } from "react-router-dom";
import { loginUser } from "../../store/actions/authAction";
import { useAppDispatch } from "../../app/hook";

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    error: {
      email: {
        status: true,
        message: ``,
      },
      password: {
        status: true,
        message: ``,
      },
    },
    showPassword: false,
    rememberMe: false,
  });

  const dispatch = useAppDispatch();

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
      },
    }));

    if (isEmailValid.status && isPasswordValid.status) {
      const response = await dispatch(
        loginUser({ email: loginForm.email, password: loginForm.password })
      );
      if (!response) {
        setLoginForm({
          ...loginForm,
          password: "",
        });
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
        <div className="auth_form mt-2">
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
