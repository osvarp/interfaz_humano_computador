
import { useState } from 'react';
import styles from "/src/styles/register.module.css";
import GoBackButton from '../components/goBackButton';

function Register ( props ) {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.name;
        const value = event.value;
        setInputs( values => ({ ...values, [name]: value }) )
    };

    const handleSubmit = (event) => {
        
    };

    return (
        <>
        <GoBackButton to="/InicioSesion" ></GoBackButton>
        <div className={styles.registerDiv} >
            <form onSubmit={handleSubmit} className={styles.registerDiv} >
                <label className={styles.registerFormLabel} > Nombre: 
                    <input 
                    type="text" 
                    name="name" 
                    value={inputs.name} 
                    onChange={handleChange} 
                    className = {styles.registerFormInput}
                    />
                </label>
                <br></br>
                <label className={styles.registerFormLabel} > Apellido: 
                    <input 
                    type="text" 
                    name="surname" 
                    value={inputs.surname} 
                    onChange={handleChange} 
                    className = {styles.registerFormInput}
                    />
                </label>
                <br></br>
                <label className={styles.registerFormLabel} > Correo electronico: 
                    <input 
                    type="email" 
                    name="email" 
                    value={inputs.email} 
                    onChange={handleChange}
                    className = {styles.registerFormInput}
                    />
                </label>
                <br></br>
                <label className={styles.registerFormLabel} > Usuario: 
                    <input 
                    type="text" 
                    name="username" 
                    value={inputs.username} 
                    onChange={handleChange}
                    className = {styles.registerFormInput}
                    />
                </label>
                <br></br>
                <label className={styles.registerFormLabel} > Contraseña: 
                    <input 
                    type="password" 
                    name="password" 
                    value={inputs.password} 
                    onChange={handleChange}
                    className = {styles.registerFormInput}
                    />
                </label>
                <br></br>
                <label className = {styles.registerFormLabel} > Cuenta para ventas:  
                    <input 
                    type = "checkbox" 
                    name = "seller"
                    value={inputs.seller}
                    onChange={handleChange}
                    className = {styles.registerCheckbox}
                    />
                </label>
                <br></br>
                <input type="submit" value="Registrarse"  />
            </form>
        </div>
        </>
    )
}

export default Register;