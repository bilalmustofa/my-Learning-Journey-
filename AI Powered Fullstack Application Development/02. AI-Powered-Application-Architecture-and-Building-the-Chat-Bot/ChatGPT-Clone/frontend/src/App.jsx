import './App.css'
import Sidebar from './components/SideBar/Sidebar.jsx'
import ChatHeader from './components/ChatHeader/ChatHeader.jsx';

function App() {

  return (
    <>
      <div className='app'>
        <Sidebar />

        <main className='chat'>
          <ChatHeader />
        </main>
      </div>
    </>
  )
}

export default App
