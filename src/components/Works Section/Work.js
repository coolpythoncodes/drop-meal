import '../../Sass/Work.scss';

const Work = ({ image, heading, text }) => {
    return (
        <div className='work'>
            <img src={ image } alt=""/>
            <h1>{ heading }</h1>
            <p>{ text }</p>
        </div>
    );
}

export default Work;
