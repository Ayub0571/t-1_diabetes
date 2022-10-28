import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
    return (
      <div>
         <h1>
            Blog</h1> <p><Link to='/'>Home</Link></p>
            <Link to='/about'>About</Link>
        
      </div>
    );
  };
  
  export { Blog };
  