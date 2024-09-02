// import './App.css';

// function App() {
//    let name = "Mohammed joseph muniyandi";
//    let age = 18;
//    let setStatus = false;
//    let userDefault = undefined;
//    let responseValue = null;
//    let oldAge=age;
//    age = 25;
//   const sendAlert =()=>{
//     alert("Message from javascript Alert");
//     console.log("Message for the developer");
//   }
//   const print =()=>{
//     alert("Check the console output")
//     console.log(name,age,setStatus,userDefault,responseValue,oldAge);
//   }

//   return (
//     <>
//       <div>
//         <h1>Let us see the output of javascript</h1>
//         <button  onClick={sendAlert}>click me </button>
//       </div>




//       <div>


//         <button  onClick={print}>click me </button>

//       </div>


//     </>
//   );
// }


// export default App;
//day2
import React from "react";

function Day2()
{
    const styleOfDiv ={
        backgroundColor: "lightblue",
        color:"blue",
        padding:"10px",
        border:"1px solid blue",
        borderRadius:"5px"
    };
    const styleOfP ={
                color:"darkBlue",
                fontSize:"16px"
    };
    return(
        <>
        <div className="exerxise1"><h1>Hello World!</h1></div>
        <div className="exerxise2">
            <h1>Inline Style in JSX Example.</h1>
            <div style={styleOfDiv}>
                <p style={styleOfP}>This is a paragraph with inline styles applied</p>
            </div>
            
        </div>
        
        </>
    )

}

export default Day2;