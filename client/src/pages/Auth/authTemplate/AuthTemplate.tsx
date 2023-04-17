import Button from "../../../components/Button/Button";
import CompanyLogo from "../../../assets/images/logos/company.png";
import { NavLink, useNavigate } from "react-router-dom";
import { MouseEvent } from "react";
type AuthTemplateProps = {
  title: string;
  subTitle?: string;
  authImage: string;
  authImageWidth: string;
  imageTitle?: string;
  imageSubTitle?: string;
  children: JSX.Element;
  buttonEvent?: () => void;
  redirectText: string;
  redirectLink: string;
  redirectLinkText: string;
};
const AuthTemplate = (props: AuthTemplateProps) => {
  const {
    title,
    subTitle,
    authImage,
    authImageWidth,
    children,
    imageTitle,
    imageSubTitle,
    buttonEvent,
    redirectText,
    redirectLink,
    redirectLinkText,
  } = props;

  const navigate = useNavigate();
  const handleClick = (event: MouseEvent) => {
    navigate("/");
  };

  return (
    <div className="auth grid grid-lg-6 grid-md-12 h-100">
      <div className="auth_left-side flex-center p-50">
        <div className="company-logo cursor-pointer" onClick={handleClick}>
          <img src={CompanyLogo} alt="Company Logo" width="90px" />
        </div>
        <div className="auth_content">
          <div className="auth_user-info">
            <h1 className="text-primary">{title}</h1>
            <p className="text-secondary">{subTitle}</p>
          </div>
          {children}
          <Button
            color="primary"
            variant="contained"
            className="auth_button w-100"
            onClick={buttonEvent}
          >
            {title}
          </Button>
          <div className="auth_footer">
            {redirectLinkText}
            <NavLink to={redirectLink} className="link decoration-none px-1">
              {redirectText}
            </NavLink>
          </div>
        </div>
      </div>
      <div className="auth_right-side flex-center flex-column bg-primary-light d-md-none p-50">
        <div className="text-center text-light-b">
          <h4 className="large m-0">{imageTitle}</h4>
          <p>{imageSubTitle}</p>
        </div>
        <div></div>
        <div className="text-center w-100">
          <img src={authImage} alt="Login" width={authImageWidth} />
        </div>
      </div>
    </div>
  );
};
export default AuthTemplate;
