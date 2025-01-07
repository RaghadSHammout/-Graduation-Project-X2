import './Button.css';
import triangle from '../../assets/photos/Home page images/triangle.png';

export default function Button({ pad, text, img ,show }) {
  return (
    <button className={`ma-btn ${pad}`}>
     {show && <img src={img} alt=''/>}
      {text}
    </button>
  );
}
