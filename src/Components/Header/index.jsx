import styles from "./header.module.css"
import Logo from "../../assets/Logo.png"
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo}/>
      </div>
    </div>
  )
}

export default Header