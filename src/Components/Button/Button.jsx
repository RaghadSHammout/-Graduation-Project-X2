import "./Button.css";
import triangle from "../../assets/photos/Home page images/triangle.png";

export default function Button({ pad, text, show }) {
  return (
    <button className={`ma-btn  ${pad}`}>
      {show && <img src={triangle} alt="button icon" />}
      {text}
    </button>
  );
}
