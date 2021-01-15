import { useContext } from 'react';
// import styled from 'styled-components'
import '../../Sass/NavLinks.scss';
import { MenuContext } from '../../context';
import { Link } from 'react-scroll';


// const Wrapper = styled.li`
//     margin-right: 30px;
//     cursor: pointer;

//     @media screen and (max-width: 768px){
//         padding: 20px 10px;
//         // border-bottom: 1px solid #ccc;
//         // transform: translate3d(-520px, 0, 0);
//         // transition: all 0.5s ease-out;

//     }
// `


// const StyledLink = styled(Link)`
//     @media screen and (max-width: 768px){
//         font-family: Mulish;
//         font-weight: 400;
//         line-height: 24px;
//         font-size: 14px; 
//         color:  #F17C22;  
//     }
// `

const NavLink = ({ href, navLink, offset }) => {
    
    const { menuToggle,setMenuToggle } = useContext(MenuContext);

    const hideSlideNav = () => {
        // if (mobileView) {
            setTimeout(() => {
                setMenuToggle(!menuToggle);
                // setnavToggle(!navToggle);
            }, 1000);
        // }
    
    }
    // const onToggle = () => {
    //     setMenuToggle(!menuToggle)
    // }
    return (
        <>
            <li menuToggle={menuToggle}>
                <Link
                    to={href}
                    spy='true'
                    activeClass='active'
                    smooth={true}
                    duration={100}
                    offset={offset}
                    onClick={hideSlideNav}
                >
                    {navLink}
                </Link>
            </li>
        </>
    )
}

export default NavLink
