import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ProductCard.module.scss';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartOutline} from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom';
import { updateFavouriteStatus } from '../../services/products-services';
import { useState } from 'react';
//import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { name, imageUrl} = product;

  const prices = product.variants.map((variant) => variant.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const [isFavourite, setIsFavourite] = useState (false);

  const handleFavouriteToggle = async () => {
    setIsFavourite((prevIsFavourite) => !prevIsFavourite);
    await updateFavouriteStatus(product.id, !isFavourite);
  };


  return (
    <div className={styles.container}>
      <Link to={`/products/${product.id}`} className={styles.link}>
        <div className={styles.card}>
          <h5 className={styles.name}>{name}</h5>
          <img className={styles.image} src={imageUrl} alt={name + ' poster'} />
          <p className={styles.price}>From ${minPrice.toFixed(2)} to ${maxPrice.toFixed(2)}</p>
        </div>
      </Link>
      <button className={styles.heart} onClick={handleFavouriteToggle}>
          <FontAwesomeIcon icon={isFavourite ? faHeart : faHeartOutline} />
      </button>
    </div>
  );
};

export default ProductCard;

//   const onDeleteClick = (e) => {
//     const confirmed = confirm('You want to delete movie with id: ' + id);
//     if (confirmed) {
//       deleteMovieById(id);
//     }
//   };

      {/* <p>{price}</p> */}
      {/* <Link className={style.card_link} to={id}>
        See More
      </Link>
      <button onClick={onDeleteClick} className={style.delete_button}>
        Delete Movie
      </button> */}
