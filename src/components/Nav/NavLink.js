import styled from 'styled-components'

const Wrapper = styled.li`
    margin-right: 40px;
`

const NavLink = ({ href,navLink }) => {
    return (
        <>
            <Wrapper>
                <a href={href}>{navLink}</a>
            </Wrapper>
        </>
    )
}

export default NavLink
