import {useState} from "react";

import burgerConstructorStyle from './burger-constructor.module.css';
import {orderData} from '../../utils/order-data';

import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {ingredientsArrayTypes} from "../../utils/propTypes";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";

const BurgerConstructor = (props) => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleClose = () => {
    setModalIsOpen(false);
  }

  const handleOrderClick = (evt) => {
    evt.stopPropagation();
    setModalIsOpen(true);
  }

  return (
    <section className={`pt-25 ml-10 ${burgerConstructorStyle.section}`}>
      <div className={`${burgerConstructorStyle.ingredientsContainer}`}>
        <ConstructorElement type={"top"}
                            isLocked={true}
                            text={"Краторная булка N-200i (верх)"}
                            thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
                            price={20}/>

        <ul className={`pl-4 ${burgerConstructorStyle.elements}`}>
          {props.data.map(ingredient => (
            <li key={String(ingredient._id)} className={`m-4 ${burgerConstructorStyle.ingredient}`}>
              <DragIcon type={"primary"}/>
              <ConstructorElement isLocked={false}
                                  text={ingredient.name}
                                  thumbnail={ingredient.image}
                                  price={ingredient.price}/>
            </li>
          ))}
        </ul>

        <ConstructorElement type={"bottom"}
                            isLocked={true}
                            text={"Краторная булка N-200i (низ)"}
                            thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
                            price={20}/>
      </div>
      <div className={`${burgerConstructorStyle.total} mt-10`}>
        <div className={`mr-10 ${burgerConstructorStyle.total__price}`}>
          <p className={'text text_type_digits-medium'}>610</p>
          <CurrencyIcon type={"primary"}/>
        </div>
        <Button type={'primary'} size={"medium"} onClick={handleOrderClick}>Оформить заказ</Button>
        <Modal isOpened={modalIsOpen} handleClose={handleClose} >
          <OrderDetails order={orderData} />
        </Modal>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  data: ingredientsArrayTypes
}

export default BurgerConstructor;
