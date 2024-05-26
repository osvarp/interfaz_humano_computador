
import { Outlet } from "react-router-dom";
import MenuAndFilters from "../components/menuAndFilters";
import ProfileImage from "../components/profileImage";
import styles from '/src/styles/productDisplay.module.css';


function NavBar() {
    return (
      <>
        <div className=" flex flex-row
        ">
            <MenuAndFilters />
            <img className={styles.smallIcon} src="/Diseño sin título.svg" alt="U-Commerce icon" />        
            <ProfileImage />

        </div>

        <Outlet />
      </>
    );
  }

  export default NavBar;