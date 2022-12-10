import {useDispatch, useSelector} from "react-redux";
import {useMemo} from "react";

import ingredientItemStyles from './ingredient-item.module.css';
import {ingredientItemTypes} from "../../utils/propTypes";

import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import {setModal} from "../../services/actions/modal";
import {useDrag} from "react-dnd";

const IngredientItem = ({item}) => {
  const dispatch = useDispatch();
  const {bunItem, fillingItems} = useSelector(store => store.burgerConstructor);

  const counterLabel = useMemo(() =>
    counter => {
      counter = (bunItem && bunItem._id === item._id) ?
        2
        :
        fillingItems.filter(ingr => ingr._id === item._id).length
      return counter
    }, [bunItem, fillingItems]);

  const handleIngredientClick = () => {
    dispatch(setModal(item, 'ingredientDetails'))
  };

  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: {...item},
    collect: monitor => ({
      isDrag: monitor.isDragging()
    })
  })

  return (
    <li className={`${ingredientItemStyles.ingredientItem} mt-6 mb-10 pl-4 pr-6`}
        ref={dragRef}
        onClick={handleIngredientClick}
        draggable
    >
      <Counter count={counterLabel(0)} size={"small"}/>
      <img className={`pl-4 pr-4 ${ingredientItemStyles.ingredientItem__image}`}
           src={item.image}
           alt={item.name}
      />
      <div className={`${ingredientItemStyles.ingredientItem__price} mt-1 mb-1`}>
        <p className={`text text_type_digits-default mr-1 ${ingredientItemStyles.ingredientItem__price_text}`}>
          {item.price}
        </p>
        <CurrencyIcon type={"primary"}/>
      </div>
      <p className={`text text_type_main-small ${ingredientItemStyles.ingredientItem__name}`}>
        {item.name}
      </p>
    </li>
  );
}

IngredientItem.propTypes = {
  item: ingredientItemTypes
}


export default IngredientItem;

