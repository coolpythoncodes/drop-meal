import { worksData } from '../../howItWorksData';
import Work from './Work';
import '../../Sass/Works.scss';

const Works = () => {
    return (
        <div className='works'>
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
        </div>
    );
}

export default Works;
