import ingredientItemStyles from './ingredient-item.module.css';

import {useState} from "react";

import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";


const IngredientItem = ({item}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => {
    console.log("Close handled!")
    setIsModalOpen(false);
  }

  return (
    <li className={`${ingredientItemStyles.ingredientItem} mt-6 mb-10 pl-4 pr-6`}
        onClick={() => setIsModalOpen(true)}>
      <Counter count={Number(item.__v)} size={"small"}/>
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
      <Modal isOpened={isModalOpen} handleClose={handleClose}>
        <IngredientDetails item={item} />
      </Modal>
    </li>
  );
}

export default IngredientItem;
