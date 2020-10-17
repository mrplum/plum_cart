import React from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import {Link} from 'react-router-dom';
import style from './Header.module.css'

const Header = () : JSX.Element => {
    return (
        <div className={style.root}>
            <Link to={{
                pathname: '/shoppingcart'
            }}> 
                <IconButton color={"default"}  >
                        <AddShoppingCartIcon />
                        <p>View</p>
                </IconButton>
            </Link>
            <Link to={{
                pathname: '/'
            }}> 
                <IconButton color={"default"}  >
                        <HomeIcon />
                        <p>Home</p>
                </IconButton>
            </Link>
        </div>
    )
}

export default Header;