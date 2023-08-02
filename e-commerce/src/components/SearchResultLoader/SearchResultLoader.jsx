import { useParams } from 'react-router-dom';
import SearchResultsPage from '../../pages/SearchResultsPage/SearchResultsPage';

const SearchResultLoader = ({ products }) => {
    const { searchTerm } = useParams();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchResultsPage filteredProducts={filteredProducts} searchTerm={searchTerm}/>
    </div>
  );
};

export default SearchResultLoader;
