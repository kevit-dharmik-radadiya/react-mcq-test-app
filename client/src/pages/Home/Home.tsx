import CompanyLogo from "../../assets/images/logos/Company.png";
import OnlineTest from "../../assets/images/backgrounds/Online-Test.svg";
import Button from "../../components/Button/Button";
import { NavLink as RouterLink } from "react-router-dom";
import { useAppSelector } from "../../app/hook";
import { ROUTE_CONSTANTS_VARIABLE } from "../../constants/routeConstants";

const Home = () => {
  const authStatus: boolean = useAppSelector(
    ({ authReducer }: Record<string, any>) => authReducer?.authStatus ?? false
  );

  return (
    <div className="flex-center mh-100">
      <div className="flex-center flex-column mw-md text-center mx-auto p-24">
        <div className="flex-center">
          <img src={CompanyLogo} alt="Company Logo" width="50px" />
          <h1 className="text-primary xxx-large">QuickQuiz</h1>
        </div>
        <p className="text-light-b title py-50">
          QuickQuiz is an online MCQ test designed to help you assess your
          knowledge on various subjects.
        </p>
        <img src={OnlineTest} alt="Online Test" className="mw-sm" />
        <p className="text-secondary">
          With a variety of categories to choose from, including science,
          history, literature, and more, you can challenge yourself and see how
          much you really know.
        </p>
        <p className="text-secondary">
          The test is timed to add an extra element of excitement, and you can
          review your results at the end to see where you need to improve.
          Whether you're a student preparing for an exam or just looking to
          brush up on your general knowledge, QuickQuiz is the perfect tool for
          you.
        </p>
        <div>
          {authStatus ? (
            <Button
              component={RouterLink}
              to={ROUTE_CONSTANTS_VARIABLE.DASHBOARD}
              variant="contained"
              color="primary"
              sx={{
                m: 0.5,
              }}
            >
              Dashboard
            </Button>
          ) : (
            <>
              <Button
                component={RouterLink}
                to={ROUTE_CONSTANTS_VARIABLE.LOGIN}
                variant="outlined"
                color="primary"
                sx={{
                  m: 0.5,
                }}
              >
                Sign In
              </Button>
              <Button
                component={RouterLink}
                to={ROUTE_CONSTANTS_VARIABLE.REGISTER}
                variant="contained"
                color="primary"
                sx={{
                  m: 0.5,
                }}
              >
                Sign Up
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
