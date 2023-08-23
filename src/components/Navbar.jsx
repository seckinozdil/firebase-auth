import { useDispatch } from "react-redux";
import { firebase_logout } from "../firebase";
import { logout } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"))
  const handleLogout = async () => {
    await firebase_logout();
    dispatch(logout());
    navigate("/", { replace: true });
  };

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between bg-slate-600 text-fuchsia-50">
        <div className="flex-grow">{user.email}</div>
        <button
          className="px-4 border rounded-lg"
          onClick={handleLogout}
        >
          {" "}
          Log Out
        </button>
      </div>
    </>
  );
};

export default Navbar;
