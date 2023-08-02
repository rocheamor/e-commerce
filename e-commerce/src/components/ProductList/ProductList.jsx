import styles from './ProductList.module.scss';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = ({ products }) => {
  
  return (
    <section className={styles.container}>
      <h3 className={styles.allProducts}>All Products</h3>
      <div className={styles.list}>
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
      </div>
    </section>
  );
};

export default ProductList;
