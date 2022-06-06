import { Outlet } from "react-router-dom";
import NavbarNavigator from "../../components/common/Navigators/NavbarNavigator";

export default function MainPage(): JSX.Element {
  return (
    <>
      <NavbarNavigator />
      <div className="flex bg-white h-[600px]">
        <Outlet />
      </div>
    </>
  );
}
