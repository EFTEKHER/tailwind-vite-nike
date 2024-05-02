import { useState } from "react";
// Supports weights 200-900
import "@fontsource-variable/nunito";
import "./App.css";
import Nav from "./components/Nav";
import ShoeDetails from "./components/ShoeDetails";
import { SHOE_LIST } from "./components/constant";
import Card from "./components/Card";
import NewArrivalSection from "./components/NewArrivalSection";

function App() {
  return (
    <div className="p-8 space-y-4 xl:px-24 animate-fadeIn">
      
        <Nav />
      <ShoeDetails />
    <NewArrivalSection items={SHOE_LIST}/>
     
    </div>
  );
}

export default App;
