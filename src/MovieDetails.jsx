import { useParams, useNavigate, useState} from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { API } from "../global";


export function MovieDetails() {
  const { id } = useParams();

  const [movie,setMovie] = useState({});
  useEffect(()=>{
    fetch(`${API}/movies/${id}`)
    .then((data)=>data.json())
    .then((mvs)=>setMovie(mvs));
  },[]);

  // const movie = movieList[id];
  console.log(movie);
  const styles = {
    color: movie.rating > 8.5 ? "green" : "red",
    // backgroundColor:"orange",// camelcase varanum
  };
  const navigate = useNavigate();
  return (
    // <div>
    //   <h1> Movie Details page {movie.name} </h1>
    // </div> "https://www.youtube.com/embed/r0synl-lI4I"
    <div>
      <iframe width="100%" height="650" src={movie.trailer} title="96 Trailer |
         Vijay Sethupathi, Trisha | Madras Enterprises | C.Prem Kumar | Govind Vasantha"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
         picture-in-picture; web-share" allowfullscreen>
      </iframe>

      <div className="Movie-detail-container">
        <div className="movie-specs">
          <h2 className="movie-name">{movie.name}
          </h2>
          <p style={styles} className="movie-rating">⭐{movie.rating}</p>
        </div>
        {/* conditional styling */}
        {/* <p style={summarystyles} className="movie-summary">{movie.summary}</p> */}
        {/* conditional rendering */}
        <p className="movie-summary">{movie.summary}</p>
        <Button
          startIcon={<ArrowBackIcon />}
          variant="contained" onClick={() => navigate(-1)}>Back</Button>
      </div>
    </div>
  );
}
