import ingredientsCategoryStyles from './ingredients-category.module.css';
import PropTypes from "prop-types";
import {ingredientsArrayTypes} from "../../utils/propTypes";

import IngredientItem from "../ingredient-item/ingredient-item";

const IngredientsCategory = ({name, items}) => {

  return (
    <li className={`${ingredientsCategoryStyles.categoryItem}`}>
      <h2 className={ingredientsCategoryStyles.categoryItem__name}>{name}</h2>
      <ul className={ingredientsCategoryStyles.ingredientItems}>
        {items.map(item => (
          <IngredientItem key={item._id} item={item}/>
        ))}
      </ul>
    </li>
  );
}

IngredientsCategory.propTypes = {
  name : PropTypes.string.isRequired,
  items : ingredientsArrayTypes,
}

export default IngredientsCategory;
