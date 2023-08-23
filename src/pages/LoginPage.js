import RegisterLogin from "../components/RegisterLogin";

const LoginPage = () => {
  const pageName = "LoginPage";
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login to your account
          </h2>
        </div>
      </div>
      <RegisterLogin pageName={pageName} />
    </>
  );
};

export default LoginPage;
