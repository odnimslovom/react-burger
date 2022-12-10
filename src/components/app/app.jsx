import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

import appStyles from './app.module.css';

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingridients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal";

import {getIngredients} from "../../services/actions/burger-ingredients";
import {unsetModal} from "../../services/actions/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";

const App = () => {

  const dispatch = useDispatch();
  const {isLoading, hasError} = useSelector(store => store.burgerIngredients);
  const {isModalOpen, contentModal, typeModal} = useSelector(store => store.modal);
  const {orderInfo} = useSelector(store => store.orderDetails);

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const handleClose = () => {
    dispatch(unsetModal());
  }

  return (
    <div className={appStyles.app}>
      <AppHeader/>
      <main className={appStyles.content}>
        {
          isLoading &&
          <p className={'text text_type_main-large'}>Загрузка...</p>
        }
        {
          !isLoading && hasError &&
          <p className={"text text_color_error text_type_main-large"}>Ошибка!!!</p>
        }
        {!isLoading && !hasError &&
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients/>
            <BurgerConstructor/>
          </DndProvider>
        }
      </main>
      {
        isModalOpen &&
        <Modal handleClose={handleClose}>
          {
            typeModal === "ingredientDetails" ?
              <IngredientDetails item={contentModal}/>
              :
              <OrderDetails order={orderInfo}/>
          }
        </Modal>
      }
    </div>
  );
}

export default App;

