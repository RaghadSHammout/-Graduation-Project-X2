
import './Title.css'

export default function Title({title , text , size , maMargin}) {
  return (
    <div className= {`${maMargin ? 'ma-50' : 'ma-80'}`}>
      <h2 className={`ma-title ${{size} ? 'ma-size' : ''}`}>{title}</h2>
      <p className='ma-text'>{text}</p>
    </div>
  )
}
