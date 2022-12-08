import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import appStyles from './app.module.css';

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingridients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

import {getIngredients} from "../../services/actions/burger-ingredients";

const App = () => {

  const dispatch = useDispatch();
  const {isLoading, hasError} = useSelector(store => store.burgerIngredients);

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <div className={appStyles.app}>
      <AppHeader/>
      <main className={appStyles.content}>
        {
          isLoading && <p className={'text text_type_main-large'}>Загрузка...</p>
        }
        {
          !isLoading && hasError &&
          <p className={"text text_color_error text_type_main-large"}>Ошибка!!!</p>
        }
        {!isLoading && !hasError &&
          <>
            <BurgerIngredients/>
            <BurgerConstructor/>
          </>
        }
      </main>
    </div>
  );
}

export default App;

