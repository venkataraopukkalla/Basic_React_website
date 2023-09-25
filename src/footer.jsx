import React from "react";
import "./style.css";

const year=new Date().getFullYear();

function Footer(){
    return <div className="footerDiv">
      <p>@copyright {year}</p>
    </div>;
}
export {Footer};