import { useState } from "react";
import AuthTemplate from "./authTemplate/AuthTemplate";
import { FormControl, IconButton, InputAdornment } from "@mui/material";
import Input from "../../components/input/Input";
import ResetPasswordSVG from "../../assets/images/backgrounds/Reset-Password.svg";
import { passwordValidate } from "../../helpers/validationHelper";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const ResetPassword = () => {
  const [validatePassword, setValidatePassword] = useState({
    password: "",
    confirmPassword: "",
    error: {
      password: {
        status: true,
        message: ``,
      },
      confirmPassword: {
        status: true,
        message: ``,
      },
    },
    isMatch: true,
    showPassword: false,
    showConfirmPassword: false,
  });

  const onHandleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValidatePassword((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClickShowPassword = () => {
    setValidatePassword((prevState) => ({
      ...prevState,
      showPassword: !validatePassword.showPassword,
    }));
  };

  const handleClickShowConfirmPassword = () => {
    setValidatePassword((prevState) => ({
      ...prevState,
      showConfirmPassword: !validatePassword.showConfirmPassword,
    }));
  };

  const onClickForgotPassword = async () => {
    const isPasswordValid = passwordValidate(
      "password",
      validatePassword.password,
      true
    );

    const isConfirmPasswordValid = passwordValidate(
      "confirm password",
      validatePassword.confirmPassword
    );

    setValidatePassword((prevState) => ({
      ...prevState,
      error: {
        password: isPasswordValid,
        confirmPassword: isConfirmPasswordValid,
      },
      isMatch: true,
    }));

    if (validatePassword.password !== validatePassword.confirmPassword) {
      setValidatePassword((prevState) => ({
        ...prevState,
        isMatch: false,
      }));
    }
  };

  return (
    <AuthTemplate
      title="Reset your Password"
      subTitle="Create a new Password to login your account."
      imageTitle={
        <span>
          Hey Buddy,
          <br /> Create your new Password
        </span>
      }
      imageSubTitle="Create a new Password to login your account"
      authImage={ResetPasswordSVG}
      authImageWidth="400px"
      buttonEvent={onClickForgotPassword}
      buttonText="Proceed"
      backToPage={true}
    >
      {
        <>
          <div className="auth_form">
            <FormControl>
              <Input
                variant="outlined"
                label="Password"
                name="password"
                type={validatePassword.showPassword ? "text" : "password"}
                placeholder="Password"
                value={validatePassword.password}
                onChange={onHandleChangeInput}
                helperText={validatePassword.error.password.message}
                error={!validatePassword.error.password.status}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        size="large"
                      >
                        {validatePassword.showPassword ? (
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
            <FormControl>
              <Input
                variant="outlined"
                label="Confirm Password"
                name="confirmPassword"
                type={
                  validatePassword.showConfirmPassword ? "text" : "password"
                }
                placeholder="Password"
                value={validatePassword.confirmPassword}
                onChange={onHandleChangeInput}
                helperText={
                  validatePassword.error.confirmPassword.message ||
                  (!validatePassword.isMatch &&
                    "Password and Confirm Password does not match.")
                }
                error={
                  !validatePassword.error.confirmPassword.status ||
                  !validatePassword.isMatch
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowConfirmPassword}
                        size="large"
                      >
                        {validatePassword.showConfirmPassword ? (
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
        </>
      }
    </AuthTemplate>
  );
};
export default ResetPassword;
