import burgerIngredientsStyles from './burger-ingredients.module.css';
import React from "react";

import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientsCategory from "../ingredients-category/ingredients-category";

const BurgerIngredients = (props) => {

  const [current, setCurrent] = React.useState('buns');
  const ingredientCategories = [
    {name: "Булки", type: 'bun'},
    {name: "Соусы", type: 'sauce'},
    {name: "Начинки", type: 'main'}
  ]
  return (
    <section className={burgerIngredientsStyles.section}>
      <h1 className={'text text_type_main-large pt-10 pb-5'}>Соберите бургер</h1>
      <div className={`${burgerIngredientsStyles.tabs} mt-5 mb-10`}>
        <Tab active={current === 'buns'} value={'buns'} onClick={setCurrent}>Булки</Tab>
        <Tab active={current === 'sauces'} value={'sauces'} onClick={setCurrent}>Соусы</Tab>
        <Tab active={current === 'fillings'} value={'fillings'} onClick={setCurrent}>Начинки</Tab>
      </div>

      <ul className={`${burgerIngredientsStyles.categories}`}>
        {ingredientCategories.map(category => {
            const currentCategoryItems = props.data.filter(item => item.type === category.type);
            return <IngredientsCategory key={category.type}
                                        name={category.name}
                                        items={currentCategoryItems}
            />
          }
        )}
      </ul>
    </section>
  );
}

export default BurgerIngredients;

