import Layout from '../components/layout/Layout'
import styles from '../styles/Layout.module.css'


export default function Performance () {
    return (
        <div className={styles.PageContainer}>
            <div className={styles.FullPageGrid}>
                <fieldset className={styles.fieldsetBox}>
                    <legend>Perfromance</legend>
                    <p>Content</p>
                </fieldset>
            </div>    
        </div>
    )
}

Performance.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}