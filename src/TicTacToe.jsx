import { useState } from "react";
import Button from '@mui/material/Button';

//component create panna two
export function TicTacToe() {
  const [board, setBoard] =useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [isXTurn,setIsXTurn] = useState(true);

  const handClick = (index) =>{
   console.log(index);
   if (!winner && board[index] === null){
    const boardcopy = [...board]; // copy pandrom
   boardcopy[index] = isXTurn ? "X" : "O"; // set pandrom
   setBoard(boardcopy); // update pandrom
   //toggle turn or alternate turn
   setIsXTurn (!isXTurn);
  }
  };
  const decideWinner = (board) => {
    const lines= [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
     ];
     for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if(board[a] != null && board[a] == board[b] && board[b]){
        console.log("Winner", board[a]);
        return board[a];
      }
      }
      return null;
      };

  const winner = decideWinner(board);

  const restartGame = ( ) => {
    setBoard([null, null, null, null, null, null, null, null, null]);
    setIsXTurn(true);

  }

  return (
    <div className="tic-tac-toe">
      <h1> TicTacToe </h1>
      <div className="board">
      {board.map((val,index)=> 
      <Gamebox  val={val} onplayerClick={() => handClick (index) } />
      )}
      </div>
      <Button onClick = {restartGame} variant="contained">Restart</Button>
       {winner ? <p>The Winner is: {winner}</p> : null} 
      
    </div>
  );
}
function Gamebox({val, onplayerClick}){
  // const [val, setval]= useState("");
  
  const styles= {
    color: val === "X" ? "green" : "red",
  };
  return(
    <div style = {styles}  onClick = {onplayerClick} className="game-box">
      {/* <div style = {styles}  onClick={onplayerClick}className="game-box"></div> */}
      {val}
    </div>
  )
}