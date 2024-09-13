import axiosInstance from './axios'
import { API_ROUTES } from './routes'

export async function getAllProducts() {
	try {
		const response = await axiosInstance.get(API_ROUTES.products)
		return response.data.products
	} catch (e) {
		return `Error occured getAllProduct ${e}`
	}
}

export async function getSingleProduct(id) {
	try {
		const response = await axiosInstance.get(`${API_ROUTES.products}/${id}`)
		return response.data
	} catch (e) {
		return `Error occured getSingleProduct ${e}`
	}
}

export async function searchProducts(query) {
	try {
		const response = await axiosInstance.get(
			`${API_ROUTES.products}/search=?${query}`
		)
		return response.data.products
	} catch (e) {
		return `Error occured searchProducts ${e}`
	}
}

export async function getProductPages(limit, skip, select) {
	try {
		const response = await axiosInstance.get(
			`${API_ROUTES.products}?limit=${limit}&skip=${skip}&select=${select}`
		)
		return response.data.products
	} catch (e) {
		return `Error occured getProductPages ${e}`
	}
}

export async function sortProducts(sortBy, order) {
	try {
		const response = await axiosInstance.get(
			`${API_ROUTES.products}?sortBy=${sortBy}&order=${order}`
		)
		return response.data.products
	} catch (e) {
		return `Error occured sortProducts ${e}`
	}
}

export async function getAllProductCategories() {
	try {
		const response = await axiosInstance.get(
			`${API_ROUTES.products}/categories`
		)
		return response.data
	} catch (e) {
		return `Error occured getAllProductCategories ${e}`
	}
}

export async function getAllProductCategoryList() {
	try {
		const response = await axiosInstance.get(
			`${API_ROUTES.products}/category-list`
		)
		return response.data
	} catch (e) {
		return `Error occured getAllProductCategoryList ${e}`
	}
}

export async function getAllProductByCategory(category) {
	try {
		const response = await axiosInstance.get(
			`${API_ROUTES.products}/category/${category}`
		)
		return response.data.products
	} catch (e) {
		return `Error occured getAllProductByCategory ${e}`
	}
}
