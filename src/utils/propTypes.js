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

const orderTypes = {
  id : PropTypes.string.isRequired,
  image : PropTypes.string.isRequired,
  status : PropTypes.string.isRequired,
  info : PropTypes.string.isRequired
}

export const ingredientItemTypes = PropTypes.shape(ingredientTypes).isRequired;
export const ingredientsArrayTypes = PropTypes.arrayOf(ingredientItemTypes).isRequired;
export const orderItemTypes = PropTypes.shape(orderTypes).isRequired
