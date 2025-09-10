import Header from "../components/header"
import styles from '../styles/Home.module.css'

function Home() {
  return (
    <>
      < Header/>
      <div className={styles.container}>
        <div className={styles.intro}>
        <div className={styles.text}>
          <h1>Be the First to Know 🚀</h1>
          <h3>We’re building a place where ideas, tips, and stories come together to inspire growth and connection. By subscribing, you’ll get fresh updates, helpful guides, and a dose of motivation delivered to your email. Think of it as your weekly spark of inspiration.</h3>
        </div>
        <div className={styles.subscription}>
          <h5>Get exclusive updates, news, and resources that help you stay ahead.</h5>
          <input type="email" name="sub-email" id="sub-email" className="sub-email" />
        </div>

          
        </div>

      </div>
      
    </>
  )
}

export default Home
