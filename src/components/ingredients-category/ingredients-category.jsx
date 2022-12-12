import {useSelector} from "react-redux";

import ingredientsCategoryStyles from './ingredients-category.module.css';
import PropTypes from "prop-types";

import IngredientItem from "../ingredient-item/ingredient-item";

const IngredientsCategory = ({ name, ingredientType}) => {

  const {ingredients} = useSelector(store => store.burgerIngredients);
  const categoryItems = ingredients.filter(item => item.type === ingredientType);

  return (
    <li className={`${ingredientsCategoryStyles.categoryItem}`}>
      <h2 className={ingredientsCategoryStyles.categoryItem__name}>{name}</h2>
      <ul className={ingredientsCategoryStyles.ingredientItems}>
        {categoryItems.map(item => (
          <IngredientItem key={item._id} item={item}/>
        ))}
      </ul>
    </li>
  );
}

IngredientsCategory.propTypes = {
  name: PropTypes.string.isRequired,
  ingredientType: PropTypes.string.isRequired,
}

export default IngredientsCategory;
