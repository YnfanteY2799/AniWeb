import { Link } from "react-router-dom";
import { NavbarProps } from "src/types/types";
import { _landScapeRoutes } from "../../../pages/Pages";
import { useLocation } from "react-router-dom";

export default function NavbarNavigator({ brand = "Sample" }: NavbarProps): JSX.Element {
  // Initial Hooks
  const { pathname } = useLocation();

  // Constants
  const actualRoute = pathname.split("/")[1];
  // Css Constants
  const notSelected =
    "text-gray-800 rounded-lg hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2";
  const selected =
    "text-gray-100 rounded-lg bg-gray-900 font-medium py-2 px-2 md:mx-2";

  function getNormalPath(src:string) : string {
    return src;
  }


  return (
    <nav className="w-full bg-white shadow-lg">
      <div className="md:flex items-center justify-between py-2 px-8 md:px-12">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800 md:text-3xl">
            <Link to="/">{brand}</Link>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  className="hidden"
                  d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"
                />
                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              </svg>
            </button>
          </div>
        </div>
        {/* Original "flex flex-col md:flex-row hidden md:block -mx-2" */}
        <div className="flex flex-col md:flex-row md:block -mx-2">
          {_landScapeRoutes.map(({ path, renderingName }, index) => {
            const isSelected =
              actualRoute === path.split("/")[0] ? selected : notSelected;
            return (
              <Link to={path} key={index} className={isSelected}>
                {renderingName}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
