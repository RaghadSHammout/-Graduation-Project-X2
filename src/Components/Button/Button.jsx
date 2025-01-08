import "./Button.css";
import triangle from "../../assets/photos/Home page images/triangle.png";

export default function Button({ pad, text, img }) {
  return (
    <button className={`ma-btn ${pad ? "ma-pad" : ""}`}>
      {img && <img src={triangle} alt="button icon" />}
      {text}
    </button>
  );
}
