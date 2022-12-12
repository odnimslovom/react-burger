import PropTypes from "prop-types";

const ingredientTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  __v: PropTypes.number.isRequired
};

export const orderTypes = PropTypes.shape({
  orderInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    order: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
    message: PropTypes.string.isRequired,
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
}).isRequired;

export const ingredientItemTypes = PropTypes.shape(ingredientTypes);
