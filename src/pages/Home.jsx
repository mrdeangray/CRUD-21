import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Home = () => {
    const {currUser, setCurrUser} = useContext(AuthContext)

  return <div>Home
    <h1>CRUD-21</h1>
    {
        currUser?<>
        
        </>:<>
        </>
    }
  </div>;
};

export default Home;
