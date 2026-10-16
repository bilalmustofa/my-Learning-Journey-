
function NavBar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2.5">
      <ul className="flex items-center justify-center space-x-15 font-medium text-gray-700">
        <li>
          <a href="#" className="hover:text-blue-600 transition-colors">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-600 transition-colors">
            Widgets
          </a>
        </li>
        {/* Nested Dropdown using 'group' */}
        <li className="relative group">
          <a href="#" className="flex items-center gap-1 hover:text-blue-600 transition-colors py-2">
            Apps
            <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          
          {/* Dropdown Menu */}
          <ul className="absolute left-0 mt-0 w-40 bg-white border border-gray-100 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-1 z-50">
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                Calendar
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                Chat
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                Email
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;