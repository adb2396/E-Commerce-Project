import React from 'react'
import styled from 'styled-components'
import Error from '../../components/Error/Error'
import Loading from '../../components/Loading/Loading'

const PageBodyStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.05);
	padding: 10px;
`

export default function PageBody({ isLoading, error, children }) {
	if (isLoading) {
		return (
			<PageBodyStyled>
				<Loading />
			</PageBodyStyled>
		)
	}

	if (error) {
		return (
			<PageBodyStyled>
				<Error error={error} />
			</PageBodyStyled>
		)
	}

	return <PageBodyStyled>{children}</PageBodyStyled>
}
