import Oops from "../assets/images/backgrounds/Oops.svg";

const Error = () => {
  return (
    <main className="flex-center flex-column p-50 text-center">
      <img src={Oops} alt="Oops!" className="mw-mobile" />
      <h1 className="xxx-large">Oops!</h1>
      <p className="mw-mobile">
        The page you are looking for may have been moved, deleted, or possibly
        never existed.
      </p>
    </main>
  );
};

export default Error;
