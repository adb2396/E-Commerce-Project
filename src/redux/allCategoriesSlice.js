import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllProductCategories } from '../api/products'

const initialState = {
	isLoading: false,
	error: null,
	data: null,
}

export const getAllProductCategoriesAction = createAsyncThunk(
	'data/getAllProductCategoriesAction',
	async () => {
		const res = await getAllProductCategories()
		return res
	}
)

export const allProductCategoriesSlice = createSlice({
	name: 'allCategories',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getAllProductCategoriesAction.pending, (state) => {
			state.isLoading = true
		})
		builder.addCase(
			getAllProductCategoriesAction.fulfilled,
			(state, action) => {
				state.isLoading = false
				state.data = action.payload
			}
		)
		builder.addCase(getAllProductCategoriesAction.rejected, (state, action) => {
			const { code, message } = action.error
			state.isLoading = false
			state.error = { code, message }
		})
	},
})
