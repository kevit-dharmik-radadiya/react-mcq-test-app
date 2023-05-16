import { KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormControl } from '@mui/material';
import AuthTemplate from './authTemplate/AuthTemplate';
import Input from '../../components/input/Input';
import ForgotPasswordSVG from '../../assets/images/backgrounds/Forgot-Password.svg';
import { isEmail } from '../../helpers/validationHelper';
import { forgotPassword } from '../../store/actions/authAction';
import ROUTE_CONSTANTS_VARIABLE from '../../constants/routeConstants';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import {
  setErrorStatus,
  setInputValues,
} from '../../store/reducers/authValidateSlice';
import { RootState } from '../../app/store';

const ForgotPassword = () => {
  const auth = useAppSelector(
    ({ authValidate }: RootState) => authValidate ?? {}
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch(setInputValues({ name, value }));
  };

  const onClickForgotPassword = async () => {
    const isEmailValid = isEmail('email', auth.email);

    dispatch(setErrorStatus({ isEmailValid }));

    if (isEmailValid.status) {
      await forgotPassword(auth.email?.trim(), () =>
        navigate(ROUTE_CONSTANTS_VARIABLE.LOGIN)
      );
    }
  };

  const onEnterKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onClickForgotPassword();
    }
  };

  return (
    <AuthTemplate
      title="Forgot your Password?"
      subTitle="No problems! Please enter your registered email."
      imageTitle="Ohh, I Forgot...!"
      imageSubTitle="To forgot your password please enter your registered email"
      authImage={ForgotPasswordSVG}
      authImageWidth="400px"
      buttonEvent={onClickForgotPassword}
      buttonText="Proceed"
      backToPage
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
            onChange={onChangeEmail}
            onKeyUp={onEnterKeyUp}
            helperText={auth.error.email.message}
            error={!auth.error.email.status}
          />
        </FormControl>
      </div>
    </AuthTemplate>
  );
};
export default ForgotPassword;
