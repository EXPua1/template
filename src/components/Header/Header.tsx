import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link to="/" className={styles.logo}>Template</Link>
                <div className={styles.navLinks}>
                    <Link to="/">Главная</Link>
                    <Link to="/about">О нас</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header 