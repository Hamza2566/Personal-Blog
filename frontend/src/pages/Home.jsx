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
          <div className={styles.email}>
          <div className={styles.group}>
        <input type="email" className={styles.input} id="Email" name="Email" placeholder="Email" autoComplete="off" required />
        <input className={styles.button} defaultValue="Subscribe" type="submit" />
      </div>
          

          </div>
        </div>

          
        </div>
        <div className={styles.article}>
          <div className={styles.DownArrow}>Scroll Down</div>
          
          <div className={styles.posts}>
            <div className={styles.search}>
              <div className={styles.SearchIntro}>
                
              <h3>Search By Tags Or Search</h3>
              </div>
              <div className={styles.tags}>
                <div className={styles.tag}>
                                  <h3>Javascript</h3>
                <h3>Javascript</h3>
                <h3>Javascript</h3>
                <h3>Javascript</h3>
                </div>
                <div className={styles.tagSearch}>
              <input type="search" name="search" id="search" className={styles.SearchInput} placeholder="Search" />

                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
      
    </>
  )
}

export default Home
