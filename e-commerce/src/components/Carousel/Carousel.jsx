import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from "./Carousel.module.scss";
import { Link } from 'react-router-dom';

const Carousel = ({products}) => {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      centerMode: true
    };
  
    return (
      <section>
      <h3 className={styles.heading}>Bestseller Products</h3>
      <div className={styles.wrapper}>
        <Slider className={styles.container} {...settings}>
      {products.map((product, id) => (
        <Link to={`/products/${product.id}`} key={id}>
          <img className={styles.image} src={product.imageUrl} alt={product.name} />
        </Link>
      ))}
        </Slider>
    </div>
    </section>
    );
  };
  
  export default Carousel;
  