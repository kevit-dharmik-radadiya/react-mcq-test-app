import Oops from '../assets/images/backgrounds/Oops.svg';
import ROUTE_CONSTANTS_VARIABLE from '../constants/routeConstants';
import BackToPage from './BackToPage';

const Error = () => {
  return (
    <main className="flex-center-15 flex-column p-50 text-center">
      <img src={Oops} alt="Oops!" className="mw-mobile" />
      <h1 className="xxx-large">Oops!</h1>
      <p className="mw-mobile">
        The page you are looking for may have been moved, deleted, or possibly
        never existed.
      </p>
      <BackToPage text="Home" to={ROUTE_CONSTANTS_VARIABLE.ROOT} />
    </main>
  );
};

export default Error;
