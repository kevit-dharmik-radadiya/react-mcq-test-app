import { useState } from "react";
import AuthTemplate from "./authTemplate/AuthTemplate";
import { FormControl } from "@mui/material";
import Input from "../../components/input/Input";
import ForgotPasswordSVG from "../../assets/images/backgrounds/Forgot-Password.svg";
import { isEmail } from "../../helpers/validationHelper";

const ForgotPassword = () => {
  const [validEmail, setValidEmail] = useState({
    email: "",
    error: {
      status: true,
      message: ``,
    },
  });

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailText = e.target.value;
    setValidEmail({ ...validEmail, email: emailText });
  };

  const onClickForgotPassword = async () => {
    const isEmailValid = isEmail("email", validEmail.email);
    setValidEmail((prevState) => ({
      ...prevState,
      error: isEmailValid,
    }));
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
                value={validEmail.email}
                onChange={onChangeEmail}
                onKeyUp={onEnterKeyUp}
                helperText={validEmail.error.message}
                error={!validEmail.error.status}
              />
            </FormControl>
          </div>
        </>
      }
    </AuthTemplate>
  );
};
export default ForgotPassword;
