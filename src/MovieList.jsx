import { Movie } from "./Movie";
import Button from '@mui/material/Button';
import { AddMovie } from "./AddMovie";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
export function MovieList() {
  const [movieList,setMovieList] = useState([]);
  const getMovies=() =>{
    fetch("https://63dcb12ec45e08a0435e4759.mockapi.io/movies", {
      method:"GET",
    })
    .then((data)=>data.json())
    .then((mvs)=>setMovieList(mvs));

  }
  useEffect(()=>getMovies()
   ,[]);

   const deleteMovie = (id) => {
    console.log("deleting movie",id)
    fetch(`https://63dcb12ec45e08a0435e4759.mockapi.io/movies/${id} `,{
      method:"DELETE"
    }).then(()=> getMovies());
   };
 return (
    <div>
      {/* <AddMovie movieList={movieList} setMovieList={setMovieList}/> */}
      <div className="movie-list">
        {movieList.map((mv) => (
          <Movie 
          key={mv.id} 
          movie={mv} 
          id={mv.id} 
         
          deleteButton={
          <IconButton 
          sx={{marginLeft:"auto"}}
          color="error"
           onClick={()=> deleteMovie(mv.id)}>
            <DeleteIcon />
          </IconButton>}/>
        ))}
      </div>
    </div>
  );
}
