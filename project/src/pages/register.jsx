
import { useState } from 'react';
import styles from "/src/styles/register.module.css";
import GoBackButton from '../components/goBackButton';
import {useNavigate} from "react-router-dom"
import UCommerceIcon from "/src/components/UCommerceIcon.jsx"


function Register ( props ) {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.name;
        const value = event.value;
        setInputs( values => ({ ...values, [name]: value }) )
    };

    const handleSubmit = (event) => {
        navigate("/Explorar");
    };

    return (
        <>
        <GoBackButton to="/" ></GoBackButton>
        <UCommerceIcon/>

        <div className={styles.registerDiv} >
            <form onSubmit={handleSubmit} className={styles.registerDiv} >
                <label className={styles.registerFormLabel} >
                    <input 
                    type="text" 
                    name="name" 
                    value={inputs.name} 
                    onChange={handleChange} 
                    className = {styles.registerFormInput}
                    />
                    Nombre
                </label>
                <br></br>
                <label className={styles.registerFormLabel} >
                    <input 
                    type="text" 
                    name="surname" 
                    value={inputs.surname} 
                    onChange={handleChange} 
                    className = {styles.registerFormInput}
                    />
                    Apellido
                </label>
                <br></br>
                <label className={styles.registerFormLabel} >
                    <input 
                    type="email" 
                    name="email" 
                    value={inputs.email} 
                    onChange={handleChange}
                    className = {styles.registerFormInput}
                    />
                    Correo electronico
                </label>
                <br></br>
                <label className={styles.registerFormLabel} > 
                    <input 
                    type="text" 
                    name="username" 
                    value={inputs.username} 
                    onChange={handleChange}
                    className = {styles.registerFormInput}
                    />
                    Usuario
                </label>
                <br></br>
                <label className={styles.registerFormLabel} >
                    <input 
                    type="password" 
                    name="password" 
                    value={inputs.password} 
                    onChange={handleChange}
                    className = {styles.registerFormInput}
                    />
                    Contraseña
                </label>
                <br></br>
                <label className = {styles.registerFormLabel} >  
                    <input 
                    type = "checkbox" 
                    name = "seller"
                    value={inputs.seller}
                    onChange={handleChange}
                    className = {styles.registerCheckbox}
                    />
                    Cuenta para ventas
                </label>
                <br></br>
                <input type="submit" value="Registrarse" className={styles.registerSubmitButton} />
            </form>
        </div>
        </>
    )
}

export default Register;