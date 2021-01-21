import React from "react"
import '../Sass/popUp.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
const PopUp = ({message, color, setMessage})=>{
    const close = ()=>{
        setMessage('')
    }
    return(
        <>
            {
                message !== ''?
                <div className='popups'>
                    <div>
                        <button onClick={close}>
                            <FontAwesomeIcon icon={faTimes} color="#fff" />
                        </button>
                        <p style={{backgroundColor:color}}>{message}</p>
                    </div>
                </div>
                :null
            }
        </>
    )
}
export default PopUp