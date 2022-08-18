import ingredientsCategoryStyles from './ingredients-category.module.css';

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

export default IngredientsCategory;
