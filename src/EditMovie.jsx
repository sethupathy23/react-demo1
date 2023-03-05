import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from "yup";
import { API } from "../global";

const formValidationSchema = yup.object({
      name: yup.string().required(), 
      poster:  yup.string().required().min(4).url(),
      rating:  yup.number().required().min(0).max(10),
      summary:  yup.string().required().min(20),
      trailer:  yup.string().required().min(4).url(),
});

export function EditMovie() {

  const { id } = useParams();

  const [movie,setMovie] = useState(null);
  useEffect(()=>{
    fetch(`${API}/movies/${id}`)
    .then((data)=>data.json())
    .then((mvs)=>setMovie(mvs));
  },[]);

  // const movie = movieList[id];
  console.log(movie);
  return movie ? <EditMovieForm movie={movie} /> : <h2>Loading ...</h2>;
}
function EditMovieForm({ movie }) {
 
  const {handleSubmit, handleChange, handleBlur, values, touched,errors} =
   useFormik({
    initialValues:{
      name: movie.name, 
      poster: movie.poster,
      rating: movie.rating,
      summary: movie.summary,
      trailer: movie.trailer,
    },
    validationSchema:formValidationSchema,
    onSubmit: (newMovie) =>{
       console.log("Form values",updatedMovie);
       updateMovie(newMovie)
    },
  });
  const navigate = useNavigate();
  const updateMovie = async (updatedMovie) => {
    
    console.log(newMovie);
    await fetch(`${API}/movies/${movie.id}`, {
      method:"PUT",
      body: JSON.stringify (newMovie),
      headers:{
        "Content-Type":"application/json"
      },
    });
    navigate('/movies');
   };
  return (
    <form onSubmit={handleSubmit} className="add-movie-form">
      <TextField
        name="name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        label="Name"
        variant="outlined" 
        error={ touched.name && errors.name }
        helperText={touched.name && errors.name ? errors.name: null }
        />
      

      <TextField
        name="poster"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        label="Poster"
        variant="outlined"
        error={ touched.poster && errors.poster }
        helperText={touched.poster && errors.poster ? errors.poster: null }
         />
     
      <TextField
        name="rating"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        label="Rating"
        variant="outlined" 
        error={ touched.rating && errors.rating }
        helperText={touched.rating && errors.rating ? errors.rating: null }
        />
        

      <TextField
        name="summary"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        label="Summary"
        variant="outlined"
        error={ touched.summary && errors.summary }
        helperText={touched.summary && errors.summary ? errors.summary: null }
        />
       

         <TextField
        name="trailer"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        label="Trailer"
        variant="outlined" 
        error={ touched.trailer && errors.trailer }
        helperText={touched.trailer && errors.trailer ? errors.trailer: null }
        />
       
      <Button type="submit"
      variant="contained"
      color="success"
      >
        Save
      </Button> //check pannanum
      {/* <p>{Name} - {Poster} - {Rating}- {Summary}</p> */}




    </div>
  );
}

export function EditMovie() {
  return <div>
    <h1>Editing movie...</h1>
  </div>;
}
