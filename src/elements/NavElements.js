import styled from 'styled-components'

export const NavWrapper = styled.nav`
    grid-column: 2 / span 2;
    grid-row: 1 / 2;
    display: flex;
    align-items: center;

    & img {
        margin-top: 3rem;
        width: 100%;
        height: 35px;
        // transform: scale(.5)
    }

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    }
`