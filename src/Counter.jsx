import { useEffect, useState } from "react";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

export function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  // useEffect(()=>{
  //   console.log("like value is update: " , like)
  // },[like, disLike]);
  return (
    <div className="Heart">
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <button
        onClick={() => setLike(like + 1)}
      >
        <h1>💜{like}</h1>

      </button>
      <button
        onClick={() => setDisLike(dislike + 1)}
      >
        <h1>💔{dislike}</h1>

      </button>
      <p></p>
    </div>

  );
}
