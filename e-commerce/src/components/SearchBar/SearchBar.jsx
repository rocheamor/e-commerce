import styles from './SearchBar.module.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const onChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm('');    
    navigate(`/search/${searchTerm}`);
  };
  return (
    <div className={styles.container}>
        <form onSubmit={handleSearch} className={styles.form}>
          <input type='text' placeholder="Search products" value={searchTerm} onChange={onChange} required className={styles.input}/>
          <button className={styles.button}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
    </div>
  );
};

export default SearchBar;