import {useContext, useEffect, useMemo, useState} from "react";

import burgerConstructorStyle from './burger-constructor.module.css';
import {AppDataContext} from "../../services/appDataContext";

import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import {useBurgerService} from "../../services/burgerApiServicve";

const BurgerConstructor = () => {
  const {appData} = useContext(AppDataContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [orderID, setOrderID] = useState(null);
  const bunItem = useMemo(() => appData.find(item => item.type === 'bun'), [appData]);
  const filingItems = useMemo(() => appData.filter(item => item.type !== 'bun'),
    [appData]);
  const {getOrder, hasError} = useBurgerService();

  useEffect(() => {
    setTotalPrice(getTotalPrice());
  }, [bunItem, filingItems]);

  const getTotalPrice = () => {
    return filingItems.reduce((sum, item) => sum + item.price, bunItem ? bunItem.price * 2 : 0);
  }

  const ingredientsIDs = useMemo(() => appData.map(item => item._id), [appData]);

  const handleClose = () => {
    setModalIsOpen(false);
  }

  const handleOrderClick = (evt) => {
    evt.stopPropagation();
    getOrder(ingredientsIDs).then((order) => {
      setOrderID(order)
    });
    setModalIsOpen(true);
  }

  return (
    <section className={`pt-25 ml-10 ${burgerConstructorStyle.section}`}>
      <div className={`${burgerConstructorStyle.ingredientsContainer}`}>
        {
          bunItem && <ConstructorElement type={"top"}
                                         isLocked={true}
                                         text={`${bunItem.name} (верх)`}
                                         thumbnail={bunItem.image}
                                         price={bunItem.price}/>
        }
        <ul className={`pl-4 ${burgerConstructorStyle.elements}`}>
          {
            filingItems && filingItems.map(ingredient => (
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
          bunItem && <ConstructorElement type={"bottom"}
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

      <Modal isOpened={modalIsOpen} handleClose={handleClose}>
        <OrderDetails id={orderID} success={!hasError}/>
      </Modal>
    </section>
  );
}

export default BurgerConstructor;
