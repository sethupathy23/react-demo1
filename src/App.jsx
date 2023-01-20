// import "./App.css";

// export default function App() {
//   return (
//     <div className="App">
//           {/* itha vanthu loop potu code olunga kaga vaika porom  */}
//       <Msg
//        //props inga anapitu

//         name="Kumar"
//         pic="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400"
//       />
//       <Msg
//         name="Raju"
//         pic="https://i.pinimg.com/564x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg"
//       />

//       <Msg
//         name="Shofiya"
//         pic="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       />
      
      
//       <Msg
//         name="Revi"
//         pic="https://images.pexels.com/photos/14959637/pexels-photo-14959637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       />

//       <Msg
//         name="czech"
//         pic="https://perfectczechwomen.com/wp-content/uploads/2019/04/New-Profile-15-500x580.jpg"
//       />
//     </div>
//   );
// }

// //component declaration
// //inga props vangikrom
// function Msg({ pic, name }) {
//   return (
//     //jsx starts here
//     <div className="usrname">
//       <img className="usr-pic" src={pic} alt={name} />
//       <h1>
//         hello am <span className="usr-name">{name}</span>
//       </h1>
//     </div>
//     //jsx ends here
//   );
// }

//day-3

import "./App.css";
 export default function App() {
  const names=["sethupathy", "robert","Ajith"];
  const users=[
    {
      name:"Kumar",
      pic:"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
       name:"Raju",
       pic:"https://i.pinimg.com/564x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg"
    },
    {
       name:"Shofiya",
       pic:"https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },     
    {  
       name:"czech",
       pic:"https://perfectczechwomen.com/wp-content/uploads/2019/04/New-Profile-15-500x580.jpg"
    },
  ];
   return (
    <div className="App">
      {
      // names.map(nm => <Welcome name="sanjay" />)}
      users.map((nm) =>( 
      <Msg 
      name={nm.name}
      pic={nm.pic}
      />
      ))}
      </div>
      );
 }
 function Msg({pic,name}){
  return(
    <div>
      <img className="user-pic" src={pic} alt={name} />
      <h1>
        Hello,<span className="user-name">{name}</span>
      </h1>
    </div>
  );
}

      // function Welcome({name}){
      //   return(
      //     <div className="usr-name">
      //       <h1>
      //          Hello, <span className="particularname">am {name} </span>
      //       </h1>
         
      //     </div>
      //   )
      // }







