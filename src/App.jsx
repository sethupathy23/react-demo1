import "./App.css";
import { useState } from "react";
 export default function App() {
  const names=["sethupathy", "robert","Ajith"];
  const users=[
    {
      name:"Ruban",
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
      <Counter />
    </div>
  );
}
 function Counter (){
    const [like,setLike]=useState(0);
    const [dislike,setDislike]=useState(0);
    return(
    <div className = "Heart">
    <button
    onClick={()=>setLike(like+1) }
    >
   <h1>Heart🧡💚💜 {like}</h1>
    
    </button>
    <button 
    onClick={()=>setDislike(dislike+1)}
    >
      <h1>BrokenHeart💔{dislike}</h1>

    </button>
    <p></p>
    </div>
    
    )
  }