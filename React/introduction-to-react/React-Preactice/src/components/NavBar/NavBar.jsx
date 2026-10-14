
function NavBar() {
  return (
    <>
        <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Widgets</a></li>
            <li>
                <a href="#">Apps</a>
                <ul>
                    <li><a href="#">Calendar</a></li>
                    <li><a href="#">Chat</a></li>
                    <li><a href="#">Email</a></li>
                </ul>
            </li>
        </ul>
    </>
  )
}

export default NavBar;