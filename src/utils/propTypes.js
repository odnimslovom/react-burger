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
  name: PropTypes.string.isRequired,
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
  status: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
}

export const orderItemTypes = PropTypes.shape(orderTypes).isRequired
export const ingredientItemTypes = PropTypes.shape(ingredientTypes);
