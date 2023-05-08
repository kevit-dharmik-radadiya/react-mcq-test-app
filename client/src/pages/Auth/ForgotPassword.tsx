import AuthTemplate from "./authTemplate/AuthTemplate";
import { FormControl } from "@mui/material";
import Input from "../../components/input/Input";
import ForgotPasswordSVG from "../../assets/images/backgrounds/Forgot-Password.svg";
import { isEmail } from "../../helpers/validationHelper";
import { forgotPassword } from "../../store/actions/authAction";
import { useNavigate } from "react-router-dom";
import { ROUTE_CONSTANTS_VARIABLE } from "../../constants/routeConstants";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import {
  setErrorStatus,
  setInputValues,
} from "../../store/reducers/authValidateSlice";

const ForgotPassword = () => {
  const authValidate: Record<string, any> = useAppSelector(
    ({ authValidate }: Record<string, any>) => authValidate ?? {}
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch(setInputValues({ name, value }));
  };

  const onClickForgotPassword = async () => {
    const isEmailValid = isEmail("email", authValidate.email);

    dispatch(setErrorStatus({ isEmailValid }));

    if (isEmailValid.status) {
      await forgotPassword(authValidate.email?.trim(), () =>
        navigate(ROUTE_CONSTANTS_VARIABLE.LOGIN)
      );
    }
  };

  const onEnterKeyUp = (event: any) => {
    if (event.key === "Enter") {
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
      backToPage={true}
    >
      {
        <>
          <div className="auth_form">
            <FormControl>
              <Input
                variant="outlined"
                label="Email"
                name="email"
                type="email"
                placeholder="Email"
                value={authValidate.email}
                onChange={onChangeEmail}
                onKeyUp={onEnterKeyUp}
                helperText={authValidate.error.email.message}
                error={!authValidate.error.email.status}
              />
            </FormControl>
          </div>
        </>
      }
    </AuthTemplate>
  );
};
export default ForgotPassword;
