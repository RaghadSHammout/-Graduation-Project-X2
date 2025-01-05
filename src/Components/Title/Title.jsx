
import './Title.css'

export default function Title({title , text , size , maMargin, matext}) {
  return (
    <div className= {`${maMargin}`}>
      <h2 className={`ma-title ${size}`}>{title}</h2>
      <p className={`${matext}`}>{text}</p>
    </div>
  )
}
