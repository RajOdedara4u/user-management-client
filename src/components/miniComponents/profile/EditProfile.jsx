import Header from "../../commonComponents/Header";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../redux/slices/UserSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const EditProfile = () => {
  const dispatch = useDispatch();
  const { email, name, address, pincode } = useSelector(
    (state) => state.UserSlice
  );

  const navigate = useNavigate(); // Initialize navigate function

  const [formData, setFormData] = useState({
    email,
    name,
    pincode,
    address,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(formData)); // Dispatch updateUser action
    navigate("/profile"); // Navigate to the home page after update
  };
  return (
    <>
      <Header />
      <section className="flex justify-center    bg-gray-900 ">
        <div className="lg:w-[80%] md:w-[90%] mt-20 xs:w-[96%] flex gap-4">
          <div className="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center   bg-gray-800/40">
            <div className="">
              <h1 className="lgtext-3xl text-slate-50 text-center mdtext-2xl smtext-xl xstext-xl font-serif font-extrabold mb-2    ">
                Update Profile
              </h1>

              <form onSubmit={handleSubmit}>
                <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                  <div className="w-full  mb-4 mt-6">
                    <label htmlFor="" className="mb-2   text-gray-300">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="mt-2 p-4 w-full text-green-500 border-2 rounded-lg    border-gray-600   bg-gray-800"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-full  mb-4 lg:mt-6">
                    <label htmlFor="" className="   text-gray-300">
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      className="mt-2 p-4 w-full border-2 rounded-lg text-green-500   border-gray-600   bg-gray-800"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                  <div className="w-full  mb-4 mt-6">
                    <label htmlFor="" className="mb-2   text-gray-300">
                      address
                    </label>
                    <input
                      type="text"
                      name="address"
                      className="mt-2 p-4 w-full text-green-500 border-2 rounded-lg    border-gray-600   bg-gray-800"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-full  mb-4 lg:mt-6">
                    <label htmlFor="" className="   text-gray-300">
                      pincode
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      className="mt-2 p-4 w-full border-2 rounded-lg text-green-500   border-gray-600  bg-gray-800"
                      value={formData.pincode}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="w-full rounded-lg  bg-blue-500 mt-4   text-lg font-semibold">
                  <button type="submit" className="w-full p-4">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default EditProfile;
