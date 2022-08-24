import { Link } from 'react-router-dom'
import error from '../../assets/img/errorPage.png'
import './NotFound.scss'

const NotFound = () => {
  return (
    <div className="error">
      <div className="container">
        <div className="error__img">
          <img src={error} alt="404 icon" />
        </div>
        <Link to="/">
          <button>На главную</button>
        </Link>
      </div>
    </div>
  )
}

export default NotFound
