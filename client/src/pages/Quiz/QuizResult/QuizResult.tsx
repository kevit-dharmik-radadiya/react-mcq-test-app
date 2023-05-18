const QuizResult = () => {
  return (
    <section className="quiz-result">
      <div className="text-center">
        <p className="text-light-black large bold">Quiz Result</p>
        <h2 className="text-primary xxx-large">Congratulations!</h2>
        <p className="text-secondary">You passed the exam</p>
        <div className="alert alert-success mx-auto mt-3">
          Well done, your grade 70%, you passed the exam successfully!
        </div>

        {/* <h2 className="text-danger xxx-large">Failed!</h2>
        <p className="text-secondary">Your grade did not pass the exam</p>
        <div className="alert alert-danger mx-auto mt-3">
          Your exam grade is 0% and 70% is required to pass the exam
        </div> */}
      </div>
    </section>
  );
};

export default QuizResult;
