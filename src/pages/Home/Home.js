import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../../components/ProductCard/ProductCard'
import PageBody from '../../Layout/PageBody/PageBody'
import { getAllProductsAction } from '../../redux/productListSlice'
import { ProductsContainer } from './Home.styled'

export default function Home() {
	// constants
	const dispatch = useDispatch()

	// state
	const { data, isLoading, error } = useSelector((state) => state.productList)

	// useEffect
	useEffect(() => {
		if (data.length === 0) {
			dispatch(getAllProductsAction())
		}
	}, [data.length, dispatch])

	return (
		<PageBody isLoading={isLoading} error={error}>
			<ProductsContainer>
				{data.map((product) => (
					<ProductCard product={product} />
				))}
			</ProductsContainer>
		</PageBody>
	)
}
