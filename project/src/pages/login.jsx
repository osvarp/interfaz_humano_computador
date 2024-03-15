
import UCommerceIcon from "/src/components/UCommerceIcon.jsx"
import {Link, useNavigate} from "react-router-dom"


function Login( props ) {
    const navigate = useNavigate();
    const handleOnClick = () => { navigate( "/Explorar" ); } 
    return (
        <>
        <UCommerceIcon/>
        <section className="fondoLogin">
            <label>
                Email:
                <input></input>
            </label>
            <br/>
            <label>
                Password:
                <input type="password" ></input>
            </label>
            <br/>
            <button onClick={handleOnClick}>Log in</button>
            <br></br>
            <Link to="/Registro"> <button> Register </button> </Link>            
        </section>
        </>
    )
}

export default Login;