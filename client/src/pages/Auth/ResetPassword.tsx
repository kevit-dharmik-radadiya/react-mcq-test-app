import AuthTemplate from "./authTemplate/AuthTemplate";
import { FormControl, IconButton, InputAdornment } from "@mui/material";
import Input from "../../components/input/Input";
import ResetPasswordSVG from "../../assets/images/backgrounds/Reset-Password.svg";
import { passwordValidate } from "../../helpers/validationHelper";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { AUTH_VALIDATE_REDUX_CONSTANTS } from "../../store/reduxConstants/authValidateReduxConstant";

const ResetPassword = () => {
  const authValidate: Record<string, any> = useAppSelector(
    ({ authValidateReducer }: Record<string, any>) => authValidateReducer ?? {}
  );
  const dispatch = useAppDispatch();

  const onHandleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch({
      type: AUTH_VALIDATE_REDUX_CONSTANTS.CHANGE_INPUT_VALUE,
      data: { name, value },
    });
  };

  const handleClickShowPassword = () => {
    dispatch({
      type: AUTH_VALIDATE_REDUX_CONSTANTS.SHOW_PASSWORD,
      data: { showPassword: !authValidate.showPassword },
    });
  };

  const handleClickShowConfirmPassword = () => {
    dispatch({
      type: AUTH_VALIDATE_REDUX_CONSTANTS.SHOW_CONFIRM_PASSWORD,
      data: { showConfirmPassword: !authValidate.showConfirmPassword },
    });
  };

  const onClickForgotPassword = async () => {
    const isPasswordValid = passwordValidate(
      "password",
      authValidate.password,
      true
    );

    const isConfirmPasswordValid = passwordValidate(
      "confirm password",
      authValidate.confirmPassword
    );

    dispatch({
      type: AUTH_VALIDATE_REDUX_CONSTANTS.CHANGE_AUTH_ERROR_STATUS,
      data: { isPasswordValid, isConfirmPasswordValid, isMatch: true },
    });

    if (authValidate.password !== authValidate.confirmPassword) {
      dispatch({
        type: AUTH_VALIDATE_REDUX_CONSTANTS.IS_PASSWORD_MATCH,
        data: { isMatch: false },
      });
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
                type={authValidate.showPassword ? "text" : "password"}
                placeholder="Password"
                value={authValidate.password}
                onChange={onHandleChangeInput}
                helperText={authValidate.error.password.message}
                error={!authValidate.error.password.status}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        size="large"
                      >
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
            <FormControl>
              <Input
                variant="outlined"
                label="Confirm Password"
                name="confirmPassword"
                type={authValidate.showConfirmPassword ? "text" : "password"}
                placeholder="Password"
                value={authValidate.confirmPassword}
                onChange={onHandleChangeInput}
                helperText={
                  authValidate.error.confirmPassword.message ||
                  (!authValidate.isMatch &&
                    "Password and Confirm Password does not match.")
                }
                error={
                  !authValidate.error.confirmPassword.status ||
                  !authValidate.isMatch
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowConfirmPassword}
                        size="large"
                      >
                        {authValidate.showConfirmPassword ? (
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
