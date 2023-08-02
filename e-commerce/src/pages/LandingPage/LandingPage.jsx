import ProductList from '../../components/ProductList/ProductList'
import Carousel from '../../components/Carousel/Carousel'


const LandingPage = ({products}) => {

  const bestsellerProducts = products.filter((product) => product.isBestseller === true);

  return (
    <div>
    <Carousel products={bestsellerProducts} />
    <ProductList products={products} />
    </div>
  )
}

export default LandingPage