import styles from './CartPage.module.scss';

const CartPage = ({cart}) => {
    return (
      <div className={styles.wrapper}>
        <h2 className={styles.header}>Your Orders</h2>
        {cart.map((product) => (
          <div key={product.id} className={styles.container}>
            <img className={styles.image} src={product.imageUrl} />
            <div>
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
                <p>Quantity: {product.quantity}</p>
            </div>
        </div>
        ))}
      </div>
    );
};

export default CartPage;