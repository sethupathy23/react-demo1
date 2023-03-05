import "./App.css";
import { AddColor } from "./AddColor";
import { MovieList } from "./MovieList";
import { Counter } from "./Counter";
import { TicTacToe } from "./TicTacToe";
import { Routes, Route, Link, useNavigate} from "react-router-dom";
// import { NotFound } from "./NotFound";
// import { Home } from "./Home";
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { borderRadius } from "@mui/system";
import { AddMovie } from "./AddMovie";
import { MovieDetails } from "./MovieDetails";
import { API } from "../global";


 export default function App() {
 
  // const [movieList, setMovieList] = useState(INITIAL_MOVIE_LIST);

  const navigate = useNavigate();
  const [mode,setMode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const bgStyles = {
      borderRadius: "0px",
      minHeight: "100vh",
  }
  // const [movieList, setMovieList] = useState([]);
  // const [movieList, setMovieList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(()=>{
  fetch(`${API}/movies`)
   .then((data)=> data.json())
   .then((mvs)=> setMovieList(mvs));
 },[]);
 return (
  <ThemeProvider theme={darkTheme}>
     <Paper sx={bgStyles} elevation={5} >
      <div className="App">
      {/* <MovieList /> */}
      {/* <AddColor /> */}
      {/* <Counter /> */}
      {/* <TicTacToe /> */}
      <AppBar position="static">
        <Toolbar>
          <Button onClick = {() => navigate ("/")} color="inherit">Home</Button>
          <Button onClick = {() => navigate ("/TicTacToe")} color="inherit">TicTacToe Game</Button>
          <Button onClick = {() => navigate ("/movies")} color="inherit">Movies</Button>
          <Button onClick = {() => navigate ("/colorgame")} color="inherit">Color Game</Button>
          <Button onClick = {() => navigate ("/movies/add")} color="inherit">AddMovie</Button>
          <Button sx={{ marginLeft:'auto'}} onClick = {()=> setMode(mode === "light" ? "dark" : "light")} color="inherit"
          startIcon={mode === 'dark' ? <Brightness7Icon/> : <Brightness4Icon/>}>
            {mode==="light" ? "dark" : "light"} mode</Button>
        </Toolbar>
      </AppBar>
     


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TicTacToe" element={<TicTacToe />} />
        <Route path="/movies" element={<MovieList movieList={ movieList } setMovieList={setMovieList}/>} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/add" element={<AddMovie movieList={movieList} setMovieList={setMovieList} />} />
        <Route path="/colorgame" element={<AddColor />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      </div>
     </Paper>
  </ThemeProvider>
      );
   }
   function Notfound() {
    return (
      <div>
        <img
        className="not-found"
        src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif"
        alt="404 Not found"
         />
      </div>
    )
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


