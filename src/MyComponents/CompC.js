import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext()

function CompC() {
   const myName =  useContext(NameContext)
  return (
    <div>
        <h1>I am Componetn C </h1>
        <h1>{myName}</h1>
    </div>
  )
}

export default CompC
