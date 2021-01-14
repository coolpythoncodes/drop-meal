import styled from 'styled-components';
import { Link } from 'react-scroll';


const InternalLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: ${props => props.backgroundColor};
    color: ${props => props.color};
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    margin-right: ${props => props.marginRight}px;
    ${
        props => props.border && `border: 1px solid ${props.borderColor};`
    }
    border-radius: ${props => props.borderRadius}px;

`
const Wrapper = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: ${props => props.backgroundColor};
    color: ${props => props.color};
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    margin-right: ${props => props.marginRight}px;
    ${
        props => props.border && `border: 1px solid ${props.borderColor};`
    }
    border-radius: ${props => props.borderRadius}px;

`

const Text = styled.p`
    font-family: Mulish;
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
`

const Button = ({ 
        children,
        color,
        backgroundColor,
        width,
        height,
        border,
        borderRadius,
        borderColor,
        marginRight,
        internalLink,
        href,
        offset
    }) => {
    return (
        <>
            {
                internalLink ?        
                <InternalLink 
                    color={color}
                    backgroundColor={backgroundColor}
                    width={width}
                    height={height}
                    borderRadius={borderRadius}
                    border={border}
                    borderColor={borderColor}
                    marginRight={marginRight}
                    to={href}
                    spy='true'
                    activeClass='active'
                    smooth={true}
                    duration={100}
                    offset={offset}
                >
                    <Text>{children}</Text>
                </InternalLink>
            : 
                <Wrapper
                     color={color}
                     backgroundColor={backgroundColor}
                     width={width}
                     height={height}
                     borderRadius={borderRadius}
                     border={border}
                     borderColor={borderColor}
                     marginRight={marginRight}
                >
                    <Text>{children}</Text>
                </Wrapper>
            }
        </>
    );
}

export default Button;
