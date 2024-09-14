import React from 'react'
import { ROUTES } from '../../routes/routes'
import {
	BrandText,
	DiscountText,
	PricingContainer,
	ProductCardContainer,
	ProductContent,
	ThumbnailImg,
} from './ProductCard.styled'

export default function ProductCard({ product }) {
	return (
		<ProductCardContainer to={`${ROUTES.PRODUCT}/${product.id}`}>
			<ThumbnailImg src={product.thumbnail} alt={product.title} />
			<ProductContent>
				<BrandText>{product.brand}</BrandText>
				<p>{product.title}</p>
				<PricingContainer>
					<p>&#8377; {product.price}</p>
					<DiscountText>{product.discountPercentage}% off</DiscountText>
				</PricingContainer>
			</ProductContent>
		</ProductCardContainer>
	)
}
