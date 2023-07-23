import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductPage.module.scss'; 
import { handleAddToCart } from '../../services/products-services';

const ProductPage = ({ products }) => {
  const { id } = useParams();

  // Find the specific product based on the id parameter
  const product = products.find((product) => product.id === id);

  const [selectedVolume, setSelectedVolume] = useState(product.variants[0].volume);

  // Handler function to update the selected variant volume
  const handleVolumeChange = (event) => {
    setSelectedVolume(event.target.value);
  };

  const onAddToCart = () => {
    handleAddToCart(product, selectedVariant)
  }

  // Find the variant object based on the selected volume
  const selectedVariant = product.variants.find((variant) => variant.volume === selectedVolume);

  return (
    <div className={styles.outerContainer}>
      {product && (
        <div className={styles.container}>
          <img className={styles.image} src={product.imageUrl} alt={product.name} />
          <div className={styles.wrapper}>
            <h2>{product.name}</h2>
            <p>Price: ${selectedVariant.price.toFixed(2)}</p>

            <label htmlFor="volume">Select variant:</label>
            <select id="volume" name="volume" value={selectedVolume} onChange={handleVolumeChange}>
              <option value="">Select a variant</option>
              {product.variants.map((variant, index) => (
                <option key={index} value={variant.volume}>
                  {variant.volume}
                </option>
              ))}
            </select>
            <p>Stocks Left: {selectedVariant.stocksLeft}</p>
            <button className={styles.btn} onClick={onAddToCart}>Add To Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
