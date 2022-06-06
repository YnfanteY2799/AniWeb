import { ChildRoute, Route } from "../types/types";
import Login from "./Login/Login";
import MainPage from "./Main/MainPage";
import Categories from "./Login/Categories/Categories";
import Favorites from "./Favorites/Favorites";
import Landing from "./Landing/Landing";

export const _landScapeRoutes: Array<ChildRoute> = [
  { path: "Categories", Element: Categories, renderingName: "Categorias" },
  { path: "Favorites", Element: Favorites, renderingName: "Favoritos" },
  { path: "", Element: Landing, isIndex: true },
];

const BaseRoute: Array<Route> = [
  {
    path: "/",
    Component: MainPage,
    childs: _landScapeRoutes,
  },
  { path: "/login", Component: Login },
];

export default BaseRoute;
