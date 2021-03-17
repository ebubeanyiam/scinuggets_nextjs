import AuthTemplate from "./AuthTemplate";

const Login = ({ setOp }) => {
  return (
    <>
      <AuthTemplate
        headerText="Welcome back"
        question="No account?"
        redirect="Create One"
        status="Login"
        setOp={setOp}
      />
    </>
  );
};

export default Login;
