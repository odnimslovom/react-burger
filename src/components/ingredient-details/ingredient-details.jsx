import ingredientDetailsStyles from './ingredient-details.module.css';
import {ingredientItemTypes} from "../../utils/propTypes";

const IngredientDetails = ({item}) => {
  return (
    <>
      <h2
        className={`${ingredientDetailsStyles.details__title} text text_type_main-large mt-10 mr-10 ml-10`}>{"Детали ингридиента"}</h2>
      <img src={String(item.image_large)} alt={item.name}/>
      <h3 className={'text text_type_main-medium mt-4 mb-8'}>{item.name}</h3>
      <ul className={`mb-15 ${ingredientDetailsStyles.details__items}`}>
        <li className={`${ingredientDetailsStyles.details__item} mr-5`}>
          <p className={'text text_type_main-default text_color_inactive mb-5'}>Калории, ккал</p>
          <p className={'text text_type_digits-default text_color_inactive'}>{item.calories}</p>
        </li>
        <li className={`${ingredientDetailsStyles.details__item} mr-5`}>
          <p className={'text text_type_main-default text_color_inactive mb-5'}>Белки, г</p>
          <p className={'text text_type_digits-default text_color_inactive'}>{item.proteins}</p>
        </li>
        <li className={`${ingredientDetailsStyles.details__item} mr-5`}>
          <p className={'text text_type_main-default text_color_inactive mb-5'}>Жиры, г</p>
          <p className={'text text_type_digits-default text_color_inactive'}>{item.fat}</p>
        </li>
        <li className={`${ingredientDetailsStyles.details__item}`}>
          <p className={'text text_type_main-default text_color_inactive mb-5'}>Углеводы, г</p>
          <p className={'text text_type_digits-default text_color_inactive'}>{item.carbohydrates}</p>
        </li>
      </ul>
    </>
  )
}

IngredientDetails.propTypes = {
  item : ingredientItemTypes
}

export default IngredientDetails;
