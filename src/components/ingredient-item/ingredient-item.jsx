import ingredientItemStyles from './ingredient-item.module.css';

import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";


const IngredientItem = ({item, setIngredient, setIngredientModal}) => {

    const handleIngredientClick = () => {
        setIngredient(item);
        setIngredientModal(true);
    }

    return (
        <li className={`${ingredientItemStyles.ingredientItem} mt-6 mb-10 pl-4 pr-6`}
            onClick={handleIngredientClick}>
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
        </li>
    );
}

export default IngredientItem;
