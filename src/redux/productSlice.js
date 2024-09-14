import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getSingleProduct } from '../api/products'

const initialState = {
	isLoading: false,
	error: null,
	data: null,
}

export const getProductAction = createAsyncThunk(
	'data/getProductAction',
	async (id) => {
		const response = await getSingleProduct(id)
		return response
	}
)

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getProductAction.pending, (state) => {
			state.isLoading = true
		})
		builder.addCase(getProductAction.fulfilled, (state, action) => {
			state.isLoading = false
			state.data = action.payload
		})
		builder.addCase(getProductAction.rejected, (state, action) => {
			const { code, message } = action.error
			state.isLoading = false
			state.error = { code, message }
		})
	},
})
