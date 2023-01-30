
export function Colorbox({ color }) {
  const styles = {
    height: "25px",
    width: "250px",
    background: color,
    marginBottom: "5px",
  };
  return <div style={styles}></div>;
}
