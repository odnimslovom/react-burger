import {useEffect, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useDrop} from "react-dnd";
import {v4 as uuidv4} from 'uuid';

import burgerConstructorStyle from './burger-constructor.module.css';

import {Button, ConstructorElement, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorItem from "../constructor-item/constructor-item";
import {addBun, addFilling} from "../../services/actions/burger-constructor";
import {postOrder} from "../../services/actions/order-details";

const BurgerConstructor = () => {

  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const {bunItem, fillingItems} = useSelector(store => store.burgerConstructor);
  const orderID = useMemo(
    () => fillingItems.map(item => item._id), [fillingItems]
  );

  useEffect(() => {
    const totalPrice = fillingItems.reduce(
      (sum, item) => sum + item.price, bunItem.length === 0 ? 0 : (bunItem.price * 2)
    );
    setTotalPrice(totalPrice);
  }, [bunItem, fillingItems]);

  const handleOrderClick = () => {
    dispatch(postOrder(orderID));
  }

  const [, dropTarget] = useDrop({
    accept: 'ingredient',
    drop(item) {
      onDropHandler(item);
    }
  })

  const onDropHandler = (item) => {
    const itemID = uuidv4();
    item.type === 'bun' ? dispatch(addBun(item, itemID)) : dispatch(addFilling(item, itemID));
  }

  return (
    <section className={`pt-25 ml-10 ${burgerConstructorStyle.section}`}>
      <div className={`${burgerConstructorStyle.ingredientsContainer}`} ref={dropTarget}>
        {
          bunItem.length !== 0 && <ConstructorElement type={"top"}
                                                      isLocked={true}
                                                      text={`${bunItem.name} (верх)`}
                                                      thumbnail={bunItem.image}
                                                      price={bunItem.price}/>
        }
        <ul className={`pl-4 ${burgerConstructorStyle.elements}`}>
          {
            fillingItems !== 0 &&
            fillingItems.map((ingredient, idx) => {
              return <ConstructorItem key={ingredient.itemID} item={ingredient} idx={idx}/>
            })
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
