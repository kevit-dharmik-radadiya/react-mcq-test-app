import { useAppDispatch } from "../../app/hook";
import Button from "../../components/Button/Button";
import { logOutUser } from "../../store/actions/authAction";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="text-center">
      <h1>Dashboard</h1>
      <Button
        color="primary"
        variant="contained"
        onClick={() => dispatch(logOutUser(history))}
      >
        Logout
      </Button>
    </div>
  );
};

export default Dashboard;
