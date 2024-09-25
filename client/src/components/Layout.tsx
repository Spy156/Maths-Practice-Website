import { Outlet } from "react-router-dom";
import CustomNavbar from "./Navbar"; 

export default function Layout() {
  return (
    <div>
      <CustomNavbar />
      <div className="p-10 pt-10"> 
        <Outlet /> 
      </div>
    </div>
  );
}
