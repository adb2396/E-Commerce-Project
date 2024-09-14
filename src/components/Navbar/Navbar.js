import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProductsAction } from '../../redux/productListSlice'
import { ROUTES } from '../../routes/routes'
import { NavbarLinks, NavbarStyled, SerachFormStyled } from './Navbar.styled'

export default function Navbar() {
	// constants
	const dispatch = useDispatch()

	// state
	const [searchQuery, setSearchQuery] = useState('')

	// handlers
	const handlerSearchChange = (e) => setSearchQuery(e.target.value)

	const handlerQuerySubmit = (e) => {
		e.preventDefault()
		// setSearchQuery('')
		dispatch(searchProductsAction(searchQuery))
	}

	return (
		<NavbarStyled>
			<div>
				<Link to={ROUTES.ROOT}>
					<img
						src="/koala.png"
						width={40}
						height={40}
						alt="brand-logo"
						title="KoalaKart"
					/>
				</Link>
			</div>
			<SerachFormStyled onSubmit={handlerQuerySubmit}>
				<input
					value={searchQuery}
					onChange={handlerSearchChange}
					placeholder="Serach for products, brands, and more"
				/>
			</SerachFormStyled>
			<NavbarLinks>
				<Link to={ROUTES.WISHLIST}>Wishlist</Link>
				<Link to={ROUTES.CART}>Cart</Link>
			</NavbarLinks>
		</NavbarStyled>
	)
}
