import Link from "./links/Links"
import styles from './navbar.module.css'
const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
            Logo
        </div>

        <div>
            <Link />
        </div>
    </div>
  )
}

export default Navbar