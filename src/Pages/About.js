import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
      <div>
         <h1>
            About 
        </h1>
       <p><Link to='/'>Home</Link></p> 
       <p><Link to='/blog'>Blog</Link></p> 
      </div>
    );
  };
  
export { About };
  