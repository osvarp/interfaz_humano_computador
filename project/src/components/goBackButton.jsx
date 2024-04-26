import {Link, useNavigate} from "react-router-dom";
import styles from '/src/styles/productDisplay.module.css';

function GoBackButton( props ) {
    const navigate = useNavigate();

    const handleClick = (event) => {
        if ( !props.to ) {
            navigate(-1);
        } else {
            navigate( props.to )
        }
    }

    return (
        
        <button onClick={handleClick} >
            <img src="/public/goBackImage.png" className="
  bg-inherit ml-3 mt-3 w-12 h-12 rounded-full float-left 
  hover:scale-105 hover:opacity-95 transition-transform duration-300
" />
        </button>
    );
}

export default GoBackButton;