import {useContext, useState} from "react";
import {ingredientsArrayTypes} from '../../utils/propTypes';
import PropTypes from "prop-types";

import burgerIngredientsStyles from './burger-ingredients.module.css';
import {AppDataContext} from "../../services/appDataContext";

import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientsCategory from "../ingredients-category/ingredients-category";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";


const BurgerIngredients = () => {

  const {appData} = useContext(AppDataContext);
  const [current, setCurrent] = useState('buns');
  const [ingredientDetails, setIngredientDetails] = useState(null);
  const [ingredientModalIsOpen, setIngredientModalIsOpen] = useState(false);

  const handleClose = () => {
    setIngredientModalIsOpen(false);
  }

  const ingredientCategories = [
    {
      name: 'Булки',
      type: 'bun',
      items: appData.filter(item => item.type === 'bun')
    },
    {
      name: 'Соусы',
      type: 'sauce',
      items: appData.filter(item => item.type === 'sauce')
    },
    {
      name: 'Начинки',
      type: 'main',
      items: appData.filter(item => item.type === 'main')
    }
  ]

  return (
    <section className={burgerIngredientsStyles.section}>
      <h1 className={'text text_type_main-large pt-10 pb-5'}>Соберите бургер</h1>

      <div className={`${burgerIngredientsStyles.tabs} mt-5 mb-10`}>
        <Tab active={current === 'buns'} value='buns' onClick={setCurrent}>Булки</Tab>
        <Tab active={current === 'sauces'} value='sauces' onClick={setCurrent}>Соусы</Tab>
        <Tab active={current === 'fillings'} value='fillings' onClick={setCurrent}>Начинки</Tab>
      </div>

      <ul className={`${burgerIngredientsStyles.categories}`}>
        {
          ingredientCategories.map(category => {
            return (<IngredientsCategory key={category.type}
                                         name={category.name}
                                         items={category.items}
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

export default BurgerIngredients;

