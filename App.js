import React from "react";
import ReactDOM from "react-dom/client";

const title = (<h1>Title</h1>);
//Functional Comp
const TitleComp = ()=> {
    return(<h1>Title Component</h1>)};
const HeadComp=()=>{
return (
    <div>
        <h2>{console.log("Hello")}</h2>
        {title}
        <TitleComp/>
        <TitleComp></TitleComp>
        {TitleComp()}

       <h1>Namaste</h1>
    </div>
)
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadComp />);
