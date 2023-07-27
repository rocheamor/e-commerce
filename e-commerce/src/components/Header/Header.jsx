/* eslint-disable react/no-unescaped-entities */
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import StyledComponent from '../StyledComponent/StyledComponent';

const Header = () => {
  return (
    <div>
        <NavLink to ="/" className={styles.link}>
          <StyledComponent>Bella's Best</StyledComponent>
        </NavLink>
    </div>
  )
}

export default Header