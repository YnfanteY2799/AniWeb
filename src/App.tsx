import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import BaseRoute from "./pages/Pages";
import "./css/App.css";

/* BASE COMPONENT: Here goes almost full app non-detailed config (No Redux/Slicer config) */
export default function App() {
  return (
    <>
      {/* Base Route Rendering */}
      <Router>
        <Routes>
          {BaseRoute.map(({ path, Component, childs = [] }, index) =>
            childs.length > 0 ? (
              <Route path={path} element={<Component />} key={index}>
                {childs.map(
                  ({ path: childPath, Element, isIndex }, childIndex) => (
                    <Route
                      index={isIndex !== undefined && isIndex}
                      path={childPath}
                      element={<Element />}
                      key={childIndex}
                    />
                  )
                )}
              </Route>
            ) : (
              <Route path={path} element={<Component />} key={index} />
            )
          )}
        </Routes>
      </Router>
      {/* Toaster and sligthly small conf */}
      <Toaster
        position="top-right"
        reverseOrder={true}
        toastOptions={{ duration: 10000 }}
      />
    </>
  );
}
