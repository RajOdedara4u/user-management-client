import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./components/Home";
import Login from "./components/miniComponents/loginSingup/Login";
import Singup from "./components/miniComponents/loginSingup/Singup";
import Logoout from "./components/miniComponents/logout/Logout";
import Profile from "./components/miniComponents/profile/Profile";
import EditProfile from "./components/miniComponents/profile/EditProfile";

import PageNotFound from "./components/miniComponents/404/PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS

function App() {
  const userD = useSelector((state) => state.UserSlice);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Singup />} />
          <Route path="*" element={<PageNotFound />} />
          // User can Access These Path After Login
          {userD.isLoggedIn ? (
            <Route path="/logout" element={<Logoout />} />
          ) : null}
          {userD.isLoggedIn ? (
            <Route path="/profile" element={<Profile />} />
          ) : null}
          {userD.isLoggedIn ? (
            <Route path="/editprofile" element={<EditProfile />} />
          ) : null}
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition:Bounce
        />
      </BrowserRouter>
    </>
  );
}
export default App;
