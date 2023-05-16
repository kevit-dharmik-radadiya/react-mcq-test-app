import { FormControl, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import AuthTemplate from './authTemplate/AuthTemplate';
import Input from '../../components/input/Input';
import ResetPasswordSVG from '../../assets/images/backgrounds/Reset-Password.svg';
import { passwordValidate } from '../../helpers/validationHelper';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import {
  isPasswordMatch,
  setErrorStatus,
  setInputValues,
  showPassword,
} from '../../store/reducers/authValidateSlice';
import { RootState } from '../../app/store';

const ResetPassword = () => {
  const auth = useAppSelector(
    ({ authValidate }: RootState) => authValidate ?? {}
  );
  const dispatch = useAppDispatch();

  const onHandleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch(setInputValues({ name, value }));
  };

  const handleClickShowPassword = () => {
    dispatch(showPassword(''));
  };

  const handleClickShowConfirmPassword = () => {
    dispatch(showPassword('confirm'));
  };

  const onClickForgotPassword = async () => {
    const isPasswordValid = passwordValidate('password', auth.password, true);

    const isConfirmPasswordValid = passwordValidate(
      'confirm password',
      auth.confirmPassword
    );

    dispatch(
      setErrorStatus({ isPasswordValid, isConfirmPasswordValid, isMatch: true })
    );

    if (auth.password !== auth.confirmPassword) {
      dispatch(isPasswordMatch(false));
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
      backToPage
    >
      <div className="auth_form">
        <FormControl>
          <Input
            variant="outlined"
            label="Password"
            name="password"
            type={auth.showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={auth.password}
            onChange={onHandleChangeInput}
            helperText={auth.error.password.message}
            error={!auth.error.password.status}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} size="large">
                    {auth.showPassword ? <VisibilityOff /> : <Visibility />}
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
            type={auth.showConfirmPassword ? 'text' : 'password'}
            placeholder="Password"
            value={auth.confirmPassword}
            onChange={onHandleChangeInput}
            helperText={
              auth.error.confirmPassword.message ||
              (!auth.isMatch && 'Password and Confirm Password does not match.')
            }
            error={!auth.error.confirmPassword.status || !auth.isMatch}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowConfirmPassword}
                    size="large"
                  >
                    {auth.showConfirmPassword ? (
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
    </AuthTemplate>
  );
};
export default ResetPassword;
