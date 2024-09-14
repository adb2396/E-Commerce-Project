import styled from 'styled-components'

export const NavbarStyled = styled.nav`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 20px 40px;
	gap: 30px;
`

export const SerachFormStyled = styled.form`
	width: 50%;

	> input {
		width: 100%;
		height: 30px;
		padding: 5px 10px;
		outline: none;
		border: none;
		border-radius: 5px;
		font-size: 16px;
		background-color: #ebf5fb;

		&:focus {
			outline: none;
		}
	}
`

export const NavbarLinks = styled.div`
	display: flex;
	gap: 30px;
	margin-left: auto;

	> a {
		text-decoration: none;
		color: #007fff;
		font-size: 16px;
		font-weight: 500;
	}
`
