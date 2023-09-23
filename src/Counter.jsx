import { useEffect, useState } from "react";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Button from '@mui/material/Button';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Badge from '@mui/material/Badge';


export function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  // useEffect(()=>{
  //   console.log("like value is update: " , like)
  // },[like, disLike]);
  return (
    <div className="Heart">
    <Button
      onClick={() => setLike(like + 1)}
      >
      <Badge badgeContent={like} color="primary">
      <ThumbUpIcon color="action" />
    </Badge>
    </Button>
     <Button
      onClick={() => setDisLike(disLike + 1)}
      >
      <Badge badgeContent={disLike} color="primary">
      <ThumbDownIcon color="action" />
    </Badge>
    </Button>
     
    </div>

  );
}
