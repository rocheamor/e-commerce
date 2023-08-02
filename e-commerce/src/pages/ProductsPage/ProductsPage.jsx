import { useLocation} from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard'
import styles from './ProductsPage.module.scss'

const ProductsPage = ({ products }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category');

  const filteredProducts = products.filter((product) => product.category === category);

  return (
    <div className={styles.container}>
      {filteredProducts.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
