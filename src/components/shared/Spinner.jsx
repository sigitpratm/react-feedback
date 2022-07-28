import spinner from '../assets/spinner.gif';

export default function Spinner() {
  return (
    <img src={spinner } alt="loading..." style={{
      width:100, margin: 'auto', display: 'block'
    }} />
  )
}
