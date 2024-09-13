import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllProducts } from '../api/products'

const initialState = {
	isLoading: false,
	error: null,
	data: [],
}

export const getAllProductsAction = createAsyncThunk(
	'data/getAllProductsAction',
	async () => {
		const response = await getAllProducts()
		return response
	}
)

export const productListSlice = createSlice({
	name: 'productList',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// loading case
		builder.addCase(getAllProductsAction.pending, (state) => {
			state.isLoading = true
		})
		// success case
		builder.addCase(getAllProductsAction.fulfilled, (state, action) => {
			state.isLoading = false
			state.data = action.payload
		})
		// failure case
		builder.addCase(getAllProductsAction.rejected, (state, action) => {
			const { code, message } = action.error
			state.isLoading = false
			state.error = { code, message }
		})
	},
})
