import {Link, useNavigate} from "react-router-dom";

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
            bg-inherit ml-3 mt-3 w-24 rounded-full float-left hover:scale-105 hover:opacity-95
            " />
        </button>
    );
}

export default GoBackButton;