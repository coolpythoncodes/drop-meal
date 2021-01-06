import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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
    }) => {
    return (
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
    );
}

export default Button;
