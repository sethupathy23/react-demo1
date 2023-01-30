import { useState } from "react";
import { Colorbox } from "./Colorbox";

export function AddColor() {
  const [color, setColor] = useState("orange");

  const styles = {
    background: color,
  };
  const [colorList, setColorList] = useState(["crimson", "orange", "black", "skyblue"]);
  return (
    <div>
      <input
        style={styles}
        type="text"
        onChange={(event) => setColor(event.target.value)} />
      {/* value={color} */}
      <button onClick={() => setColorList([...colorList, color])}> Add color</button>
      {colorList.map((clr) => <Colorbox color={clr} />)}
    </div>
  );
}
