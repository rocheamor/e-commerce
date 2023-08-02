import styles from "./CategoryCard.module.scss";
import { useNavigate } from "react-router-dom";


const CategoryCard = ({ category }) => {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate(`/products?category=${category}`);
    };
  
    return (
      <div className={styles.container} onClick={handleClick}>
        <h4 className={styles.card}>{category}</h4>
      </div>
    );
  };

export default CategoryCard;