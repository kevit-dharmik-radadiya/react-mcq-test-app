import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hook";
import Button from "../../components/Button/Button";
import { logOutUser } from "../../store/actions/authAction";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <div className="text-center">
      <h1>Dashboard</h1>
      <Button
        color="primary"
        variant="contained"
        onClick={() => dispatch(logOutUser(navigate))}
      >
        Logout
      </Button>
    </div>
  );
};

export default Dashboard;
