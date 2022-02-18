import './topbar.scss';
import { Mail, Person } from '@material-ui/icons'

export default function TopBar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>Portfolio</a>
          <div className="itemContainer">
            <Person className='icon' />
            <span>+54 342 5054676</span>
          </div>
          <div className="itemContainer">
            <Mail className='icon' />
            <span>apascuale@outlook.com</span>
          </div>
        </div>
        <div className="right">
          <div className="bars" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
