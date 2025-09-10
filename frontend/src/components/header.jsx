import styles from '../styles/Header.module.css'
function Header() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <a href="/" className={styles.name}>
        <h2 className={styles.name}>Blog</h2>
        </a>
        <div className={styles.Links}>
          <a href="/contact">Contact</a>
          <a href="about">About</a>
        </div>
          
      </header>
    </div>
  );
}

export default Header;
