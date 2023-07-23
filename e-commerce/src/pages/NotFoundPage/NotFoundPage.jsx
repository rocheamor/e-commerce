/* eslint-disable react/no-unescaped-entities */
import styles from './NotFoundPage.module.scss'
import notFound from './NotFound.jpg'

const NotFoundPage = () => {
  return (
    <main className={styles.main}>
        <h3>The page you're looking for doesn't exist</h3>
        <img className={styles.image} src={notFound} alt='page not found' />
    </main>
  )
}

export default NotFoundPage