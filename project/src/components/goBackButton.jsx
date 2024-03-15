import {Link} from "react-router-dom";
import styles from "/src/styles/goBackButton.module.css";

function GoBackButton( props ) {
    return (
        <Link to={props.to} className={styles.goBackLink} >
            <img src="/public/goBackImage.png" className={styles.goBackImage} />
        </Link> 
    )
}

export default GoBackButton;