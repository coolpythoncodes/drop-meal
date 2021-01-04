import styled from 'styled-components';

const Wrapper = styled.div`
    @media screen and (max-width: 767px){
        display: flex;
        flex-direction: column;
    }
`

const Heading = styled.h1`
    font-family: Mulish;
    font-weight: 700;
    font-size: 24px;
    line-height: 25px;
    letter-spacing: 0.015em;
    margin: 1rem 0;
    width: 169px;

    @media screen and (max-width: 767px){
        font-size: 18px;
        display: flex;
        justify-content: center;
        // width: 140px;
        width: unset;
        margin: 1rem auto;
    }

    @media screen and (max-width: 300px){
        font-size: 16px;
    }
`

const Text = styled.p`
    font-family: Mulish;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.015em;
    // width: 288px;

    @media screen and (max-width: 767px){
        text-align: center;
        margin: 21px 0 40px 0;
        font-size: 14px;
    }

`


const Work = ({ image, heading, text }) => {
    return (
        <Wrapper>
            <img src={ image } alt=""/>
            <Heading>{ heading }</Heading>
            <Text>{ text }</Text>
        </Wrapper>
    );
}

export default Work;
