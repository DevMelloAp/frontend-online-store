import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductCard from '../Components/ProductCard';

class ShopCar extends React.Component {
  render() {
    const { location } = this.props;
    const { state } = location;
    const addedProducts = [...new Set(state)];
    return (
      <div>
        {state.length === 0 ? (
          <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
        )
          : (
            addedProducts.map((product) => (
              <ProductCard
                product={ product }
                key={ product.id }
                onClick={ () => {} }
                buttonText="Remover Produto"
                buttonId=""
                itemId="shopping-cart-product-name"
                showQuantity
                products={ state }
              />))
          )}
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

ShopCar.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default ShopCar;
