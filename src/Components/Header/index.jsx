import styles from "./header.module.css"
import Logo from "../../assets/Logo.png"
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo}/>
      </div>
    </header>
  )
}

export default Header