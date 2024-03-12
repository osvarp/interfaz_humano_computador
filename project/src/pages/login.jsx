
import UCommerceIcon from "/src/components/UCommerceIcon.jsx"

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
        </>
    )
}

export default Login;