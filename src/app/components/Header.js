import styles from "@/app/styles/navbar.module.css"
import Link from "next/link"
import Image from "next/image"
import Navbar from "./Navbar"

const Header = () => {
  return (
<>
<header className={styles.main_header}>
    <div className={styles.navbar_brand}>
    <Link href="/">
    <Image src={"/nav-logo.png"} alt="logo-image" width={135} height={100} className={styles.logo}/>
    </Link>
    </div>
<Navbar/>
</header>
</>

  )
}

export default Header