import styled from 'styled-components'
import { worksData } from '../../howItWorksData';
import Work from './Work';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
    width: 80%;
    margin: auto;

    @media screen and (max-width: 767px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media screen and (max-width: 300px){
        width: 90%;
    }
`

const Works = () => {
    return (
        <Wrapper>
            {
                worksData.map(({ 
                    id, 
                    heading, 
                    text, 
                    image
                }) => <Work 
                        key={id}
                        heading={heading}
                        text={text}
                        image={image}
                        
                        />)
            }
        </Wrapper>
    );
}

export default Works;
