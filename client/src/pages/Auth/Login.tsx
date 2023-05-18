import { FormControl, IconButton, InputAdornment } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { Email, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import SignIn from '../../assets/images/backgrounds/Sign-In.svg';
import AuthTemplate from './authTemplate/AuthTemplate';
import Input from '../../components/input/Input';
import { isEmail, passwordValidate } from '../../helpers/validationHelper';
import { loginUser } from '../../store/actions/authAction';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import ROUTE_CONSTANTS_VARIABLE from '../../constants/routeConstants';
import {
  setErrorStatus,
  setInputValues,
  showPassword,
} from '../../store/reducers/authValidateSlice';
import { RootState } from '../../app/store';

const Login = () => {
  const auth = useAppSelector(
    ({ authValidate }: RootState) => authValidate ?? {}
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onHandleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch(setInputValues({ name, value }));
  };

  const handleClickShowPassword = () => {
    dispatch(showPassword(''));
  };

  const onClickLogin = async () => {
    const isEmailValid = isEmail('email', auth.email);
    const isPasswordValid = passwordValidate('password', auth.password, true);

    dispatch(setErrorStatus({ isEmailValid, isPasswordValid }));

    if (isEmailValid.status && isPasswordValid.status) {
      const response = await dispatch(
        loginUser({ email: auth.email, password: auth.password }, navigate)
      );
      if (!response) {
        dispatch(setInputValues({ name: 'password', value: '' }));
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
      <div className="auth_form">
        <FormControl>
          <Input
            variant="outlined"
            label="Email"
            name="email"
            type="email"
            placeholder="Email"
            value={auth.email}
            onChange={onHandleChangeInput}
            helperText={auth.error.email.message}
            error={!auth.error.email.status}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
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
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
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
        <div className="auth_forgot">
          <NavLink
            to={ROUTE_CONSTANTS_VARIABLE.FORGOT_PASSWORD}
            className="link decoration-none"
          >
            Forgot Password?
          </NavLink>
        </div>
      </div>
    </AuthTemplate>
  );
};

export default Login;
