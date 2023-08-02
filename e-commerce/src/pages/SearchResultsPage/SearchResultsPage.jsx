/* eslint-disable react/no-unescaped-entities */
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from './SearchResultsPage.module.scss'

const SearchResultsPage = ({ filteredProducts, searchTerm }) => {

    console.log(filteredProducts);


  return (
    <section className={styles.container}>
        <div className={styles.results}>
          {filteredProducts.length > 0 ? <h5>Search results for "{searchTerm}"</h5> : <h4>No results found for "{searchTerm}"</h4>}
        </div>
        <div className={styles.products}>
            {filteredProducts.map((product, id) => (
            <div key={id}>
                <ProductCard product={product} />
            </div>
            ))}
        </div>
    </section>
  )
}

export default SearchResultsPage