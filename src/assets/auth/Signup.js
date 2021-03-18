import AuthTemplate from "./AuthTemplate";

const Signup = ({ setOp }) => {
  return (
    <>
      <AuthTemplate
        headerText="Start your journey"
        question="Already have an account?"
        redirect="Login"
        status="Sign up"
        backOp="login"
        setOp={setOp}
      />
    </>
  );
};

export default Signup;
