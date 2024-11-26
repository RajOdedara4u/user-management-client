import Header from "../../commonComponents/Header";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Profile = () => {
  const userD = useSelector((state) => state.UserSlice);

  return (
    <>
      <Header />
      <section className="flex justify-center  bg-gray-900 ">
        <div className="lg:w-[80%] md:w-[90%] mt-20 xs:w-[96%] flex gap-4">
          <div className="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center bg-gray-800/40">
            <div className="">
              <h1 className="lg:text-3xl text-center md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2 text-white">
                View Profile
              </h1>

              <form>
                <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                  <div className="w-full  mb-4 mt-6">
                    <label htmlFor="" className="mb-2 text-gray-300">
                      Name
                    </label>
                    <input
                      disabled
                      type="text"
                      className="mt-2 p-4 w-full border-2 rounded-lg text-gray-200 border-gray-600 bg-gray-800"
                      placeholder={userD.name}
                    />
                  </div>
                  <div className="w-full  mb-4 lg:mt-6">
                    <label htmlFor="" className=" text-gray-300">
                      Email
                    </label>
                    <input
                      disabled
                      type="text"
                      className="mt-2 p-4 w-full border-2 rounded-lg text-gray-200 border-gray-600 bg-gray-800"
                      placeholder={userD.email}
                    />
                  </div>
                </div>

                <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                  <div className="w-full  mb-4 mt-6">
                    <label htmlFor="" className="mb-2 text-gray-300">
                      address
                    </label>
                    <input
                      disabled
                      type="text"
                      className="mt-2 p-4 w-full border-2 rounded-lg text-gray-200 border-gray-600 bg-gray-800"
                      placeholder={userD.address}
                    />
                  </div>
                  <div className="w-full  mb-4 lg:mt-6">
                    <label htmlFor="" className=" text-gray-300">
                      pincode
                    </label>
                    <input
                      disabled
                      type="text"
                      className="mt-2 p-4 w-full border-2 rounded-lg text-gray-200 border-gray-600 bg-gray-800"
                      placeholder={userD.pincode}
                    />
                  </div>
                </div>

                <NavLink
                  to="/editprofile"
                  type="submit"
                  className=" py-2 px-3 mt-6 mx-auto flex text-center  rounded-lg bg-blue-500 text-white text-lg font-semibold"
                >
                  Edit
                </NavLink>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Profile;
