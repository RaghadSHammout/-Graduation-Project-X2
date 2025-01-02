import './Title.css'

export default function Title({title , text}) {
  return (
    <div>
      <h2 className='ma-title'>{title}</h2>
      <p className='ma-text'>{text}</p>
    </div>
  )
}
