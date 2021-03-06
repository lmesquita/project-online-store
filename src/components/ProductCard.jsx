import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { title, imagem, price, prodId, addItem } = this.props;

    return (
      <div className="card">
        <Link data-testid="product-detail-link" to={ `details/${prodId}` }>
          <div data-testid="product">
            <img src={ imagem } alt={ title } />
            <p>{title}</p>
            <p>{`R$ ${price}`}</p>
          </div>
        </Link>
        <button
          type="button"
          onClick={ () => addItem(prodId) }
          data-testid="product-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  addItem: PropTypes.func.isRequired,
  prodId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
