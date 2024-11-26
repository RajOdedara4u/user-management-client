import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const userD = useSelector((state) => state.UserSlice);

  return (
    <>
      <div className="flex z-50 w-full absolute justify-between sm:px-4 sm:py-3 py-1 px-2 items-center ">
        <div className="flex items-center gap-2">
          <h1 //-------------------------------------- LIBRARY NAME-----------------------------
            className="font-extrabold  text-[1.3rem] max-[426px]:text-[1rem] max-[345px]:text-[0.8rem] text-slate-300"
          >
            Welcome Mr {userD.name}
          </h1>
        </div>

        <div className="flex gap-2">
          <div className="flex justify-center items-center gap-5 ">
            {userD.isLoggedIn ? (
              <NavLink className="" to="/profile">
                <svg
                  className="fill-white h-[24px] max-[480px]:h-[19px] "
                  viewBox="0 0 20 20"
                  id="profile"
                >
                  <g
                    id="Page-1"
                    fill="none"
                    fillRule="evenodd"
                    stroke="none"
                    strokeWidth="1"
                  >
                    <g
                      id="Dribbble-Light-Preview"
                      fill="white"
                      transform="translate(-180 -2159)"
                    >
                      <g id="icons" transform="translate(56 160)">
                        <path
                          id="profile-[#1341]"
                          d="M134 2009c-2.217 0-4.019-1.794-4.019-4s1.802-4 4.019-4 4.019 1.794 4.019 4-1.802 4-4.019 4m3.776.673a5.978 5.978 0 0 0 2.182-5.603c-.397-2.623-2.589-4.722-5.236-5.028-3.652-.423-6.75 2.407-6.75 5.958 0 1.89.88 3.574 2.252 4.673-3.372 1.261-5.834 4.222-6.22 8.218a1.012 1.012 0 0 0 1.004 1.109.99.99 0 0 0 .993-.891c.403-4.463 3.836-7.109 7.999-7.109s7.596 2.646 7.999 7.109a.99.99 0 0 0 .993.891c.596 0 1.06-.518 1.003-1.109-.385-3.996-2.847-6.957-6.22-8.218"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </NavLink>
            ) : null}
            <NavLink className="" to="/">
              <svg
                className="fill-white h-[26px] max-[480px]:h-[20px] "
                viewBox="0 0 24 24"
              >
                <path d="M 12 2 A 1 1 0 0 0 11.289062 2.296875 L 1.203125 11.097656 A 0.5 0.5 0 0 0 1 11.5 A 0.5 0.5 0 0 0 1.5 12 L 4 12 L 4 20 C 4 20.552 4.448 21 5 21 L 9 21 C 9.552 21 10 20.552 10 20 L 10 14 L 14 14 L 14 20 C 14 20.552 14.448 21 15 21 L 19 21 C 19.552 21 20 20.552 20 20 L 20 12 L 22.5 12 A 0.5 0.5 0 0 0 23 11.5 A 0.5 0.5 0 0 0 22.796875 11.097656 L 12.716797 2.3027344 A 1 1 0 0 0 12.710938 2.296875 A 1 1 0 0 0 12 2 z"></path>
              </svg>
            </NavLink>

            {userD.isLoggedIn ? (
              <NavLink className="font-bold text-white" to="/logout">
                <svg
                  className="flex-shrink-0 h-[20px] max-[480px]:h-[18px] text-gray-200 transition duration-75 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    stroke-winejoin="round"
                    strokeWidth="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
              </NavLink>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
