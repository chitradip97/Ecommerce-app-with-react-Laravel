import logo from './logo.svg';
// import './App.css';
import Master_layout from './layout/admin_layout/Master_layout';
import User_master_layout from './layout/user_layout/User_master_layout'
import React, { useState } from 'react';
import { BrowserRouter as router,Route,Switch } from 'react-router-dom';


function App() {
// const[login,setlogin]=useState('');

//   if(login=='admin')
//   {
//     return (
//       <div className="App">
//         <Master_layout/>
//         {/* <User_master_layout/> */}
//       </div>
//     );
//   }
//   else{
    return (
      <div className="App">
        {/* <Master_layout/> */}
        <User_master_layout/>
      </div>
    );
  // }
  
}

export default App;
