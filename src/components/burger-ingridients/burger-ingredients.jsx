import {useEffect, useState} from "react";
import {useInView} from "react-intersection-observer";

import burgerIngredientsStyles from './burger-ingredients.module.css';

import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientsCategory from "../ingredients-category/ingredients-category";

const BurgerIngredients = () => {

  const [current, setCurrent] = useState('buns');
  const [bunsRef, bunsInView] = useInView({
    threshold: 0.2
  });
  const [saucesRef, saucesInView] = useInView({
    threshold: 0.2
  });
  const [fillingsRef, fillingsInView] = useInView({
    threshold: 0.2
  });

  const handleScroll = () => {
    switch (true) {
      case bunsInView:
        setCurrent('buns');
        break;
      case saucesInView:
        setCurrent('sauces');
        break;
      case fillingsInView:
        setCurrent('fillings');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    handleScroll();
  }, [bunsInView, saucesInView, fillingsInView]);

  const handleTabClick = (type) => {
    setCurrent(type);
    const section = document.getElementById(type);
    section.scrollIntoView({behavior: "smooth", block: "start"});
  };


  return (
    <section className={burgerIngredientsStyles.section}>
      <h1 className={'text text_type_main-large pt-10 pb-5'}>Соберите бургер</h1>

      <div className={`${burgerIngredientsStyles.tabs} mt-5 mb-10`}>
        <Tab active={current === 'buns'} value='buns' onClick={() => handleTabClick('buns')}>Булки</Tab>
        <Tab active={current === 'sauces'} value='sauces' onClick={() => handleTabClick('sauces')}>Соусы</Tab>
        <Tab active={current === 'fillings'} value='fillings' onClick={() => handleTabClick('fillings')}>Начинки</Tab>
      </div>

      <ul className={`${burgerIngredientsStyles.categories}`}>
        <div ref={bunsRef} id='buns'>
          <IngredientsCategory key='buns' name='Булки' ingredientType='bun'/>
        </div>
        <div ref={saucesRef} id='sauces'>
          <IngredientsCategory key='buns' name='Соусы' ingredientType='sauce'/>
        </div>
        <div ref={fillingsRef} id='fillings'>
          <IngredientsCategory key='buns' name='Начинки' ingredientType='main'/>
        </div>
      </ul>
    </section>
  );
}
export default BurgerIngredients;

