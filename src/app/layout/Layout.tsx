import { Outlet } from "react-router-dom";
// Custom Components
import Navbar from "./Navbar";
// --------------------------------------------

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
