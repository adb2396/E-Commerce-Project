import { configureStore } from '@reduxjs/toolkit'
import { allProductCategoriesSlice } from './redux/allCategories'
import { categoryListSlice } from './redux/categoryListSlice'
import { productListSlice } from './redux/productListSlice'
import { productSlice } from './redux/productSlice'

export default configureStore({
	reducer: {
		productList: productListSlice.reducer,
		product: productSlice.reducer,
		productCategories: allProductCategoriesSlice.reducer,
		categoryList: categoryListSlice.reducer,
	},
})
