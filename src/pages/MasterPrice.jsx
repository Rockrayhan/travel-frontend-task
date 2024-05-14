import {  Outlet } from "react-router-dom";
import ActiveLink from "../components/ActiveLink" ;

const MasterPrice = () => {
 
  return (
    <div>
      <h1 className="text-3xl font-bold"> Master Price </h1>

      <div className="flex justify-center my-4">
        <ActiveLink  to='/round-trip'><button className="border-2 border-blue-800 px-3">Round Trip</button></ActiveLink>
        <ActiveLink  to=''><button className="border-2 border-blue-800 px-3"> One Way </button></ActiveLink>
        <ActiveLink  to='/multi-city'><button className="border-2 border-blue-800 px-3"> Multi City </button></ActiveLink>
      </div>

    <Outlet/>

    </div>
  );
};

export default MasterPrice;
