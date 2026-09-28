import styles from './NavBar.module.css';

function NavBar() {
  return (
    <>
        <ul className={styles.navbar}>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Widgets</a></li>
            <li>
                <a href="#">Apps</a>
                <ul className={styles.subMenu}>
                    <li>Calendar</li>
                    <li>Chat</li>
                    <li>Email</li>
                </ul>
            </li>
        </ul>
    </>
  )
}

export default NavBar;