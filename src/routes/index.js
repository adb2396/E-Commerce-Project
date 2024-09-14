import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Error from '../components/Error/Error'
import Cart from '../pages/Cart/Cart'
import Home from '../pages/Home/Home'
import Product from '../pages/Product/Product'
import Wishlist from '../pages/Wishlist/Wishlist'
import { ROUTES } from './routes'

const router = createBrowserRouter([
	{
		path: ROUTES.ROOT,
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				element: <Home />,
				errorElement: <Error />,
				index: true,
			},
			{
				path: ROUTES.WISHLIST,
				element: <Wishlist />,
				errorElement: <Error />,
			},
			{
				path: ROUTES.CART,
				element: <Cart />,
				errorElement: <Error />,
			},
			{
				path: `${ROUTES.PRODUCT}/:id`,
				element: <Product />,
				errorElement: <Error />,
			},
		],
	},
])

export default router
