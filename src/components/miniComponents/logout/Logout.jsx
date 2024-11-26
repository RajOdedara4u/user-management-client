import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../redux/slices/UserSlice";
import { useDispatch } from "react-redux";
const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(logout());
    return navigate("/login");
  }, [logout]);
};

export default Logout;
