import "./Button.css";
import triangle from "../../assets/photos/Home page images/triangle.png";

export default function Button({ pad, text, img, show }) {
  return (
    <button className={`ma-btn  ${pad}`}>
      {show && img && <img src={img || triangle} alt="button icon" />}
      {text}
    </button>
  );
}
