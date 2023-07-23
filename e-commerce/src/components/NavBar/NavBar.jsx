import CategoryList from "../CategoryList/CategoryList"
import Header from "../Header/Header"
import SearchBar from "../SearchBar/SearchBar"
import styles from './NavBar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";



const NavBar = ({products}) => {
  return (
    <section className={styles.container}>
        <Header />
        <CategoryList products={products}/>
        <div className={styles.wrapper}>
          <Link to={`/products/:id/cart`}className={styles.icon}>
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>
          <SearchBar />
        </div>
    </section>
  );
}

export default NavBar