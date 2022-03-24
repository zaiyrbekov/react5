import "./Tooltip.css";

function Tooltip(props) {
  const className = ["Description", "Tooltip"];
  if (props.description.top) {
    className.push("top");
  }
  if (props.description.right) {
    className.push("right");
  }
  if (props.description.bottom) {
    className.push("bottom");
  }
  if (props.description.left) {
    className.push("left");
  }

  return <div className={className.join(" ")}>{props.children}
  <div>{props.description}</div>
  </div>;
}
export default Tooltip;
