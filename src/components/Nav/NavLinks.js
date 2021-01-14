import NavLink from "./NavLink"

const NavLinks = ({ breakPoint,deviceWidth }) => {

    const mobileNavLinksComponent = <>
        <NavLink
            navLink='About' 
            href='about'
            // offset={450}
        />
        <NavLink 
            navLink='How it works' 
            href='how-it-works'
        />
        <NavLink 
            navLink='Partner with us' 
            href='partner'
        />
        <NavLink
            navLink='Support' 
            href='contact' 
        />
        <NavLink 
            navLink='Download' 
            href='/' 
        />
    </>

    const desktopNavLinksComponent = <>
        <NavLink 
            navLink='About' 
            href='about'
            offset={450}
        />
        <NavLink 
            navLink='How it works' 
            href='how-it-works'
            offset={-150}
        />
        <NavLink 
            navLink='Partner with us' 
            href='partner'
        />
        <NavLink 
            navLink='Support' 
            href='contact' 
            offset={-150}
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
