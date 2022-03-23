import "./Image.css";

function Image(props) {
  const className = ["Imade", props.align].join("");
  const style = {
    width: props.width,
    height: props.height,
  };

  return <img className="classNmae" style={style} src={props.url} />;
}
export default Image;
