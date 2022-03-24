import "./Button.css";

function Button(props) {
  const className = ["Button"];
  if (props.succes) {
    className.push("succes");
  }
  if (props.danger) {
    className.push("danger");
  }
  if (props.primary) {
    className.push("primary");
  }
  if (props.secondary) {
    className.push("secondary");
  }
  if (props.warning) {
    className.push("warning");
  }
  if (props.info) {
    className.push("info");
  }
  if (props.light) {
    className.push("light");
  }
  if (props.dark) {
    className.push("dark");
  }

  return <div className={className.join(" ")}>{props.children}</div>;
}
export default Button;
