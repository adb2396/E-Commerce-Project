import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { ROUTES } from './routes'

const router = createBrowserRouter([
	{
		path: ROUTES.ROOT,
		element: <App />,
		errorElement: <h5>Error Occured!</h5>,
		children: [],
	},
])

export default router
