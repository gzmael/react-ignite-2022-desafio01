import styles from './Header.module.css'
import Logo from '../../../assets/Logo.svg'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={Logo} alt="Logo Todo" className={styles.logo} />
      </div>
    </header>
  )
}

export { Header }
