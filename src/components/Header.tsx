import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const Header = ({ toggleDarkMode, darkMode }: IProps) => {
  return (
    <div className="dark:bg-[#141516]/80 bg-[#141516]/95 backdrop-blur-3xl   h-16 text-white flex items-center justify-between w-full sticky -top-1">
      <div className="container flex items-center justify-between m-auto px-7 max-h-[100%]">
        {/* <div className="w-25 h-25">
          <img src="logo.png" alt="" className=" max-w-[100%]" />
        </div> */}
        <h1 className="font-[rakkas] text-3xl">الغول </h1>

        <div className="flex items-center justify-center gap-1.5  ">
          <p  >
           للتواصل 
          </p>
          <p className="text-end">
            01228482274 <br /> 01000418122 
          </p>
          <button
            onClick={toggleDarkMode}
            className="px-4 py-2 text-white rounded cursor-pointer"
          >
            {darkMode ? (
              <FontAwesomeIcon icon={faSun} size="1x" />
            ) : (
              <FontAwesomeIcon icon={faMoon} size="1x" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
