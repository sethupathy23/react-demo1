import { useState } from "react";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import {Counter} from "./Counter"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router-dom";
// import { useNavigate } from react;

//practice

export function Movie({ movie, id,deleteButton,getMovies}) {
  //conditional styling / ? : = Ternary operator
  const styles = {
    color: movie.rating > 8.5 ? "green" : "red",
    // backgroundColor:"orange",// camelcase varanum
  };
  //conditional styling end
  const [show, setShow] = useState(true);
  const summarystyles = {
    display: show ? "block" : "none",
  };
  // const movie=
  // {
  //   "name": "Vikram",
  //   "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
  //   "rating": 8.4,
  //   "summary": "Members of a black ops team must track and eliminate a gang of masked murderers."
  // };

  const navigate = useNavigate(); 
  return (
    <Card className="Movie-container">
      <img className="movie-poster" src={movie.poster} alt={movie.name} />
      <CardContent>
      <div className="movie-specs">
        <h2 className="movie-name">{movie.name}<IconButton color="primary"
       onClick={() => setShow(!show)}
        aria-label="Toggle Summary"
       >
         {/* //conditional rendering */}
       {show ? <ExpandLessIcon /> : <ExpandMoreIcon />} 
      </IconButton>
      <IconButton color="primary"
       onClick={() => navigate("/movies/" + id)}  
        aria-label="Movie details"
       >
         {/* //conditional rendering */}
        < InfoIcon />  
      </IconButton>
      </h2>
        <p style={styles} className="movie-rating">⭐{movie.rating}</p>
      </div>
      {/* conditional styling */}
      {/* <p style={summarystyles} className="movie-summary">{movie.summary}</p> */}
      {/* conditional rendering */}
      {show ? <p className="movie-summary">{movie.summary}</p> : null}
      </CardContent>
      <CardActions>
        <Counter /> {deleteButton}
      </CardActions>
      


    </Card>
  );
}
