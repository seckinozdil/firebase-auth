import RegisterLogin from "../components/RegisterLogin";

const RegisterPage = () => {
  const pageName = "RegisterPage";
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create Account
          </h2>
        </div>
      </div>
      <RegisterLogin pageName={pageName} />
    </>
  );
};

export default RegisterPage;
