import burgerConstructorStyle from './burger-constructor.module.css';

import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {ingredientsArrayTypes} from "../../utils/propTypes";

const BurgerConstructor = (props) => {
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
            <li key={ingredient._id} className={`m-4 ${burgerConstructorStyle.ingredient}`}>
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
        <Button type={'primary'} size={"medium"}>Оформить заказ</Button>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  data: ingredientsArrayTypes
}

export default BurgerConstructor;
