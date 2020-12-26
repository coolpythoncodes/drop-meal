import NavLink from "./NavLink"


const NavLinks = ({ breakPoint,deviceWidth }) => {

    const mobileNavLinksComponent = <>
        <NavLink
            navLink='About' 
            href='/'
        />
        <NavLink 
            navLink='How it works' 
            href='/'
        />
        <NavLink 
            navLink='Partner with us' 
            href='/'
        />
        <NavLink
            navLink='Support' 
            href='/' 
        />
        <NavLink 
            navLink='Download' 
            href='/' 
        />
    </>

    const desktopNavLinksComponent = <>
        <NavLink 
            navLink='About' 
            href='/'
        />
        <NavLink 
            navLink='How it works' 
            href='/'
        />
        <NavLink 
            navLink='Partner with us' 
            href='/'
        />
        <NavLink 
            navLink='Support' 
            href='/' 
        />
    </>

    return (
        <>
            {
                deviceWidth <= breakPoint ? mobileNavLinksComponent : desktopNavLinksComponent
            }
        </>
    );
}

export default NavLinks;
