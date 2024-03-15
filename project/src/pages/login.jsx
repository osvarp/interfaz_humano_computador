
import UCommerceIcon from "/src/components/UCommerceIcon.jsx"
import {Link} from "react-router-dom"

function Login( props ) {
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
            <button>Log in</button>
            
        </section>
        <Link to="/Registro"> <button> Register </button> </Link>
        </>
    )
}

export default Login;