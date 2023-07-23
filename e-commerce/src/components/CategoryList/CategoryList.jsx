import styles from './CategoryList.module.scss';
import CategoryCard from '../CategoryCard/CategoryCard';

const CategoryList = ({ products }) => {
    const uniqueCategories = [...new Set(products.map((product) => product.category))];
  
    return (
      <section className={styles.list}>
        {uniqueCategories.map((category, id) => (
          <CategoryCard key={id} category={category} /> 
        ))}
      </section>
    );
  };
  

export default CategoryList;

