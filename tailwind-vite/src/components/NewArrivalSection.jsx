import React from "react";
import lines from "../assets/lines.png";
import Card from "./Card";

const NewArrivalSection = ({ items }) => {
  return (
    <div className="flex flex-col  mt-10" id="Products">
      <div
        className="text-center text-4xl font-extrabold bg-center  underline underline-offset-4" style={{backgroundImage:`url${lines}`}}>
        NEW ARRIVALS
     
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      
      {
        items.map((item)=><Card key={item.id} item={item}/>)
      }
      </div>
    </div>
  );
};

export default NewArrivalSection;
