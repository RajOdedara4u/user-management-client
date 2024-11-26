import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { register } from "../../../redux/slices/UserSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    pincode: "",
    password: "",
    conPassword: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.password == formData.conPassword
      ? dispatch(register(formData))
          .unwrap()
          .then(() => {
            navigate("/"); // Navigate on success
          })
          .catch((error) => {
            console.log("Login failed:", error); // Handle error
          })
      : toast.error("Passwords do not match");
  };

  return (
    <>
      <div className="flex flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full items-center justify-center px-6 py-8 mx-auto  lg:py-0">
        <div className="w-full  bg-white rounded-md sm:max-w-md">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              New Account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Name
                </label>
                <input
                  value={formData.name}
                  onChange={handleInput}
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  value={formData.email}
                  onChange={handleInput}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="yourmamil@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your Address
                </label>
                <input
                  value={formData.address}
                  onChange={handleInput}
                  type="address"
                  name="address"
                  id="address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="2 city mall , dupcomplex"
                />
              </div>
              <div>
                <label
                  htmlFor="pincode"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your pincode
                </label>
                <input
                  value={formData.pincode}
                  onChange={handleInput}
                  type="pincode"
                  name="pincode"
                  id="pincode"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="203943"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  value={formData.password}
                  onChange={handleInput}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                />
              </div>
              <div>
                <label
                  htmlFor="conPassword"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Confirm Password
                </label>
                <input
                  value={formData.conPassword}
                  onChange={handleInput}
                  type="password"
                  name="conPassword"
                  id="conPassword"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign Up
              </button>
              <p className="text-sm font-light text-gray-500">
                Already have an account?{" "}
                <NavLink
                  to="/login"
                  className="font-medium text-primary-600 hover:underline"
                >
                  Sign in
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
