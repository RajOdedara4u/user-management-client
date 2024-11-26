import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../../../redux/slices/UserSlice";
import { useDispatch } from "react-redux";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    isAdmin: false,
  });
  const dispatch = useDispatch();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(formData))
      .unwrap()
      .then(() => {
        navigate("/"); // Navigate on success
      })
      .catch((error) => {
        console.log("Login failed:", error); // Handle error
      });
  };
  return (
    <>
      <div className="h-screen w-screen flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  ">
        <div className="w-[100%]  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  pt-20 sm:pt-0">
          <section className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <div className="w-full bg-white rounded-md shadow border md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Login Here
                  </h1>
                  <form
                    className="space-y-4 md:space-y-6"
                    onSubmit={handleSubmit}
                  >
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
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="yourmail@domain.com"
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

                    <button
                      type="submit"
                      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Sign in
                    </button>

                    <p className="text-sm font-light text-gray-500">
                      Don’t have an account yet?{" "}
                      <NavLink
                        to="/signup"
                        className="font-medium text-primary-600 hover:underline"
                      >
                        Sign up
                      </NavLink>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Login;
