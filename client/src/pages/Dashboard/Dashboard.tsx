import { NavLink } from "react-router-dom";
import Learning from "../../assets/images/logos/Learning.svg";
import { ROUTE_CONSTANTS_VARIABLE } from "../../constants/routeConstants";

const Dashboard = () => {
  return (
    <section className="dashboard p-50">
      <div>
        <p className="title bold m-0">Hey!</p>
        <h2 className="text-primary xxx-large m-0">Dharmik</h2>
        <p className="text-secondary m-0">Good luck for the exam today.</p>
      </div>
      <div className="my-2">
        <div className="exam-box position-relative">
          <div>
            <p className="text-light-white x-large">Give a</p>
            <p className="text-light-b xxx-large f-500">Exam</p>
          </div>
          <NavLink
            to={ROUTE_CONSTANTS_VARIABLE.SUBMISSIONS}
            className="text-light-white medium text-decoration-none"
          >
            Start Now
          </NavLink>
          <img src={Learning} alt="Learning" className="corner-img" />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
