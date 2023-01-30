import "./App.css";
import { AddColor } from "./AddColor";
import { MovieList } from "./MovieList";
import { Counter } from "./Counter";
import { TicTacToe } from "./TicTacToe";
import { Routes, Route, Link } from "react-router-dom";

 export default function App() {
 return (
    <div className="App">
      {/* <MovieList /> */}
      {/* <AddColor /> */}
      {/* <Counter /> */}
      <TicTacToe />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TicTacToe" element={<TicTacToe />} />
      </Routes>
    </div>
      );
   }

   function Home() {
    return (
      <div>
        <h1>
          Welcome to the movie app 😍
        </h1>
      </div>
    );
   }


