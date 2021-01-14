import { useContext } from 'react';
import styled from 'styled-components'
import { MenuContext } from '../../context';
import { Link } from 'react-scroll';

// const close = `
//     transform: translate3d(0, 0, 0);
// //     .nav-item:nth-child(1) {
// //     transition-delay: 0.1s;
// //   }
// `

const Wrapper = styled.li`
    margin-right: 30px;
    cursor: default;

    @media screen and (max-width: 768px){
        padding: 20px 10px;
        border-bottom: 1px solid #ccc;
        // transform: translate3d(-520px, 0, 0);
        // transition: all 0.5s ease-out;

    }
`


const StyledLink = styled(Link)`
    @media screen and (max-width: 768px){
        font-family: Mulish;
        font-weight: 400;
        line-height: 24px;
        font-size: 14px;   
    }
`

const NavLink = ({ href, navLink, offset }) => {
    
    const { menuToggle } = useContext(MenuContext);
    // const onToggle = () => {
    //     setMenuToggle(!menuToggle)
    // }
    return (
        <>
            <Wrapper menuToggle={menuToggle}>
                <StyledLink
                    to={href}
                    spy='true'
                    activeClass='active'
                    smooth={true}
                    duration={100}
                    offset={offset}
                >
                    {navLink}
                </StyledLink>
            </Wrapper>
        </>
    )
}

export default NavLink
