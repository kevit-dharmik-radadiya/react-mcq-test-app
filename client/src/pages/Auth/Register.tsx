import { FormControl, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import SignUp from '../../assets/images/backgrounds/Sign-Up.svg';
import AuthTemplate from './authTemplate/AuthTemplate';
import Input from '../../components/input/Input';
import {
  isEmail,
  passwordValidate,
  usernameValidate,
} from '../../helpers/validationHelper';
import { registerUser } from '../../store/actions/authAction';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import ROUTE_CONSTANTS_VARIABLE from '../../constants/routeConstants';
import {
  setErrorStatus,
  setInputValues,
  showPassword,
} from '../../store/reducers/authValidateSlice';
import { RootState } from '../../app/store';

const Register = () => {
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
    const isUsernameValid = usernameValidate('username', auth.username);
    const isEmailValid = isEmail('email', auth.email);
    const isPasswordValid = passwordValidate('password', auth.password, true);

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
            email: auth.email,
            password: auth.password,
            username: auth.username,
          },
          navigate
        )
      );
      if (!response) {
        dispatch(setInputValues({ name: 'password', value: '' }));
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
      <div className="auth_form">
        <FormControl>
          <Input
            variant="outlined"
            label="Username"
            name="username"
            type="text"
            placeholder="Username"
            value={auth.username}
            onChange={onHandleChangeInput}
            helperText={auth.error.username.message}
            error={!auth.error.username.status}
          />
        </FormControl>
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
      </div>
    </AuthTemplate>
  );
};

export default Register;
