import SideBar from "../components/SideBar"
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex flex-1 flex-row">
    <div className="h-[100vh] flex-1 w-1/6"> <SideBar/> </div>
    {/* <div className="h-[100vh] flex-1 w-5/6"> <SideBar/> </div> */}
    </div>
    
  );
};

export default Home