import React from 'react';
import {connect} from 'react-redux'
import {ReactComponent as ShoppingIcon} from '../../assest/shopping-bag.svg';
import { toggleCartHidden } from './../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import './cart-icon.styles.scss';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({toggleCartHidden, itemCount}) => {
    return(
    <div className='cart-icon ' onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
    <span className='item-count'>{itemCount}</span>
    </div>)
}

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: ()=>dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps )(CartIcon);