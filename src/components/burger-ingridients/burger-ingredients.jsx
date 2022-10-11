import React, {useContext} from "react";
import {ingredientItemTypes, ingredientsArrayTypes} from '../../utils/propTypes';
import PropTypes from "prop-types";

import burgerIngredientsStyles from './burger-ingredients.module.css';
import {AppDataContext} from "../../services/appDataContext";
import {ingredientCategories} from "../../utils/constans";

import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientsCategory from "../ingredients-category/ingredients-category";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";


const BurgerIngredients = () => {

  const {appData} = useContext(AppDataContext);

  const [current, setCurrent] = React.useState('buns');
  const [ingredientDetails, setIngredientDetails] = React.useState(null);
  const [ingredientModalIsOpen, setIngredientModalIsOpen] = React.useState(false);

  console.log(appData);

  const handleClose = () => {
    setIngredientModalIsOpen(false);
  }

  return (
    <section className={burgerIngredientsStyles.section}>
      <h1 className={'text text_type_main-large pt-10 pb-5'}>Соберите бургер</h1>

      <div className={`${burgerIngredientsStyles.tabs} mt-5 mb-10`}>
        <Tab active={current === 'buns'} value={'buns'} onClick={setCurrent}>Булки</Tab>
        <Tab active={current === 'sauces'} value={'sauces'} onClick={setCurrent}>Соусы</Tab>
        <Tab active={current === 'fillings'} value={'fillings'} onClick={setCurrent}>Начинки</Tab>
      </div>

      <ul className={`${burgerIngredientsStyles.categories}`}>
        {
          ingredientCategories.map(category => {
            const currentCategoryItems = appData.filter(item => item.type === category.type);
            return (<IngredientsCategory key={category.type}
                                         name={category.name}
                                         items={currentCategoryItems}
                                         setIngredient={setIngredientDetails}
                                         setIngredientModal={setIngredientModalIsOpen}

            />);
          })
        }
      </ul>
      <Modal isOpened={ingredientModalIsOpen} handleClose={handleClose}>
        <IngredientDetails item={ingredientDetails}/>
      </Modal>
    </section>
  );
}

IngredientsCategory.propTypes = {
  name: PropTypes.string.isRequired,
  items: ingredientsArrayTypes,
  setIngredient: PropTypes.func.isRequired,
  setIngredientModal: PropTypes.func.isRequired,
}

IngredientDetails.propTypes = {
  item: ingredientItemTypes
}

export default BurgerIngredients;

