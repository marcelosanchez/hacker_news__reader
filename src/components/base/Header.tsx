
import '../../styles/base/Header.css';
import logo from '../../assets/logo/logo.png';

export const Header = () => {
    return (
        <div className="header__container">
            <img src={logo} alt="logo" className="header__logo" />
        </div>
    )
}