import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ProductCardContainer = styled(Link)`
	background-color: white;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	max-width: 180px;
	padding: 10px;
	text-decoration: none;
	transition: 0.1s ease-out;

	&:hover {
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
		transform: scale(1.02);
	}
`

export const ProductContent = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: space-between;
	font-size: 13px;
	color: #818181;
`

export const ThumbnailImg = styled.img`
	width: 100%;
	height: 200px;
`

export const BrandText = styled.p`
	font-weight: 600;
	font-size: 12px;
	margin-top: 7px;
`

export const PricingContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	font-size: 14px;
	color: black;
	gap: 20px;
`

export const DiscountText = styled.p`
	color: green;
	font-weight: 600;
`
