import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'

function App() {
	// state

	return (
		<div className="App">
			<Navbar />
			{/* <CategoryNavbar /> */}
			<Outlet />
		</div>
	)
}

export default App
