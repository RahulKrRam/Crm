import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import House from './MyComponents/House';
import Person from './MyComponents/Person';
import PropTypes from 'prop-types';
import ClickFunction from './MyComponents/ClickFunction';
import Employee from './MyComponents/Employee';
import Customer from './MyComponents/Customer';
import BindingEvent from './MyComponents/BindingEvent';
import ParentComponent from './MyComponents/ParentComponent';
import Component1 from './MyComponents/Component1';
import Component2 from './MyComponents/Component2';
import StryleComponent from './MyComponents/StryleComponent';
// import USComponent from './MyComponents/USComponent';
// import USWithObject from './MyComponents/USWithObject';
// import USWithArray from './MyComponents/USWithArray';
import ClassState from './MyComponents/ClassState';
import FunctionState from './MyComponents/FunctionState';
import ClassEffects from './MyComponents/ClassEffects';
import CompA from './MyComponents/CompA';
// import { createContext, useEffect } from 'react';
import ControlledForm from './ControlledForm';
import ControlledFunction from './MyComponents/ControlledFunction';
import MultipleInpts from './MyComponents/MultipleInpts';
import FunctionalInputs from './MyComponents/FunctionalInputs';
import OtherInputs from './MyComponents/OtherInputs';
import MultipleChecks from './MyComponents/MultipleChecks';
import RefCompnenet from './MyComponents/RefCompnenet';
import Uncontrolled from './MyComponents/Uncontrolled';
import CallbackRefComp from './MyComponents/CallbackRefComp';
import Task1 from './MyComponents/Task1';
import HookUseRef2 from './MyComponents/HookUseRef2';
import UseEffectAPI from './MyComponents/UseEffectAPI'
import Quote from './MyComponents/axios/Quote';
import Image from './MyComponents/Image';
import CRUD from './MyComponents/CRUD';
import DigitalcClock from './MyComponents/DigitalcClock';
import Student from './MyComponents/Student';
import F1 from './MyComponents/F1';
import Swr from './MyComponents/Swr';
// import Practice from './MyComponents/Practice';
import Navbar from './MyComponents/Navbar';
import Wizard from './MyComponents/Wizard';
import Isotop from './MyComponents/Isotop';
import ReactChart from './MyComponents/ReactChart';
import Stories from './MyComponents/API/Stories';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Search from './MyComponents/API/Search';

// export const  NameContext = createContext()
function App() {  
  
  // useEffect(() => {
  //   $(document).ready(function(){
  //     barChart();
      
  //     $(window).resize(function(){
  //         barChart();
  //     });
      
  //     function barChart(){
  //         $('.bar-chart').find('.progress').each(function(){
  //             var itemProgress = $(this),
  //             itemProgressWidth = $(this).parent().width() * ($(this).data('percent') / 100);
  //             itemProgress.css('width', itemProgressWidth);
  //         });
  //     }
  // });


  // }, []);
  return (
    <>     
      {/* <Employee name="Rahul"/> 
      <Customer name='Amit' age={23} /> */}

       {/* <Header name="Suresh"  age="23">
        
        <p>Chidren Element 1</p>
      </Header> */}
      {/* <Header name="Kumar" age="20">
        <button className='btn btn-primary' type='button' value='Click'>Click</button>
      </Header>     */}
      {/* <Header name="Amit" age="22">
           <h3>Children Element 3</h3>
        </Header> */}
      {/* <Todos/> */}
      {/* <Footer/> */}
      {/* <House/> */}
      {/* <Person/> 
      <ClickFunction name="Rahul Kumar" />  */}
      {/* <BindingEvent /> */}
      {/* <ParentComponent /> */}
      {/* <StryleComponent /> */}
      {/* <USComponent/> */}
        {/* <USWithObject/> 
        <USWithArray/> */}
      {/* <ClassState/> */}
      {/* <FunctionState/> */}
      {/* <ClassEffects/> */}
   {/* <NameContext.Provider value={'Adil'}>
    <CompA/>
   </NameContext.Provider> */}
    {/* <ControlledForm/> */}
   {/* <ControlledFunction/>  */}
    {/* <MultipleInpts/>  */}
   {/* <FunctionalInputs/> */}
    {/* <OtherInputs/> */}
    {/* <MultipleChecks/>  */}
    {/* <RefCompnenet/> 
    <Uncontrolled/> */}
     
    {/* <CallbackRefComp/> 
     <HookUseRef2/> */}
    {/* <UseEffectAPI/> */}
    
       {/* <Image/>  */}
       {/* <CRUD/> */}
       {/* <DigitalcClock/> */}
       {/* <Student name={"anil"} email={"anil@test.com"} object={{address:"delhi", mobile:"000"}}/>
       <Student name={"petter"} email={"peter@test.com"} object={{address:"gurgaon", mobile:"555"}}/>
       <Student name={"priti"} email={"priti@test.com"} object={{address:"noida", mobile:"111"}}/> */}
      {/* <F1/> */}
      {/* <div className='App'>
        {
          status? <h1>Hello World !</h1> : null
        }
      </div> */}
      <Swr/>
       {/* <Navbar/> */}
      {/* <Practice/> */}
      {/* <Wizard/> */}
    {/* <ReactChart/> */}
{/* <UseEffectAPI/> */}
      {/* <Stories/> */}
          <Router>
            <Routes>
            {/*<Route path='/customers' element={<Customers />} /> */}
            
          </Routes>
      </Router>
    </> 
  )
}
export default App;


  