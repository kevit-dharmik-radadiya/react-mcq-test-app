import { NavLink } from "react-router-dom";
import Learning from "../../assets/images/logos/Learning.svg";
import Submissions from "../../assets/images/logos/Submissions.svg";
import Contact from "../../assets/images/logos/Contact.svg";
import { ROUTE_CONSTANTS_VARIABLE } from "../../constants/routeConstants";
import { useAppSelector } from "../../app/hook";
import Hotline from "../../assets/images/logos/Hotline";

const Dashboard = () => {
  const userDetails: Record<string, any> = useAppSelector(
    ({ userReducer }: Record<string, any>) => userReducer?.userDetails ?? {}
  );
  return (
    <section className="dashboard p-24">
      <div>
        <p className="title bold m-0">Hey!</p>
        <h2 className="text-primary xxx-large m-0">{userDetails.userName}</h2>
        <p className="text-secondary m-0">Good luck for the exam today.</p>
      </div>
      <div className="dashboard-box my-2">
        <div className="box-content position-relative">
          <div>
            <p className="text-light-b x-large">Give a</p>
            <p className="text-primary xxx-large f-500">Exam</p>
          </div>
          <NavLink
            to={ROUTE_CONSTANTS_VARIABLE.QUIZ}
            className="text-light-b medium text-decoration-none"
          >
            Start Now
          </NavLink>
          <img src={Learning} alt="Learning" className="corner-img d-md-none" />
        </div>
        <div className="box-content wide position-relative">
          <div>
            <p className="text-light-b x-large">Find Your</p>
            <p className="text-primary xxx-large f-500">Submissions</p>
          </div>
          <NavLink
            to={ROUTE_CONSTANTS_VARIABLE.SUBMISSIONS}
            className="text-light-b medium text-decoration-none"
          >
            Find Now
          </NavLink>
          <img
            src={Submissions}
            alt="Submissions"
            className="corner-img d-md-none"
          />
        </div>

        <div className="contact-us w-100">
          <h3 className="text-white large">Contact Us</h3>
          <p className="text-light-white">
            Contact out best support team for any issue
          </p>
          <a href="tel:+919874563210" className="d-block text-white mt-4">
            {Hotline} +919874563210
          </a>
          <img src={Contact} alt="Contact" className="contact-img d-md-none" />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
