import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllProductCategoryList } from '../api/products'

const initialState = {
	isLoading: false,
	error: null,
	data: null,
}

export const getAllProductCategoryListAction = createAsyncThunk(
	'data/getAllProductCategoryListAction',
	async () => {
		const res = await getAllProductCategoryList()
		return res
	}
)

export const categoryListSlice = createSlice({
	name: 'allCategories',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getAllProductCategoryListAction.pending, (state) => {
			state.isLoading = true
		})
		builder.addCase(
			getAllProductCategoryListAction.fulfilled,
			(state, action) => {
				state.isLoading = false
				state.data = action.payload
			}
		)
		builder.addCase(
			getAllProductCategoryListAction.rejected,
			(state, action) => {
				const { code, message } = action.error
				state.isLoading = false
				state.error = { code, message }
			}
		)
	},
})
