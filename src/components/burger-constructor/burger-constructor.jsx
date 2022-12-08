import {useEffect, useState} from "react";

import burgerConstructorStyle from './burger-constructor.module.css';
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";

const BurgerConstructor = () => {

  const dispatch = useDispatch();
  const {bunItem, fillingItems} = useSelector(state => state.burgerConstructor);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const totalPrice = fillingItems.reduce(
      (sum, item) => sum + item.price, bunItem.length !== 0 ? (bunItem.price * 2) : 0
    );
    setTotalPrice(totalPrice);
  }, [bunItem, fillingItems]);

  function handleOrderClick() {
    console.log("handleOrderClick");
  }

  return (
    <section className={`pt-25 ml-10 ${burgerConstructorStyle.section}`}>
      <div className={`${burgerConstructorStyle.ingredientsContainer}`}>
        {
          bunItem.length !== 0 && <ConstructorElement type={"top"}
                                                      isLocked={true}
                                                      text={`${bunItem.name} (верх)`}
                                                      thumbnail={bunItem.image}
                                                      price={bunItem.price}/>
        }
        <ul className={`pl-4 ${burgerConstructorStyle.elements}`}>
          {
            fillingItems !== 0 && fillingItems.map(ingredient => (
              <li key={ingredient._id} className={`m-4 ${burgerConstructorStyle.ingredient}`}>
                <DragIcon type={"primary"}/>
                <ConstructorElement isLocked={false}
                                    text={ingredient.name}
                                    thumbnail={ingredient.image}
                                    price={ingredient.price}/>
              </li>
            ))
          }
        </ul>

        {
          bunItem.length !== 0 && <ConstructorElement type={"bottom"}
                                                      isLocked={true}
                                                      text={`${bunItem.name} (низ)`}
                                                      thumbnail={bunItem.image}
                                                      price={bunItem.price}/>
        }

      </div>

      <div className={`${burgerConstructorStyle.total} mt-10`}>
        <div className={`mr-10 ${burgerConstructorStyle.total__price}`}>
          <p className={'text text_type_digits-medium'}>{totalPrice}</p>
          <CurrencyIcon type={"primary"}/>
        </div>
        <Button type={'primary'} size={"medium"} onClick={handleOrderClick}>Оформить заказ</Button>
      </div>

    </section>
  );
}

export default BurgerConstructor;
