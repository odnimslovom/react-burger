import {useEffect, useState} from "react";

import appStyles from './app.module.css';
import {useBurgerService} from '../../services/burgerApiServicve'
import {AppDataContext} from "../../services/appDataContext";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingridients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

const App = () => {

  const [appData, setAppData] = useState([]);
  const {isLoading, hasError, getAppData} = useBurgerService();
<<<<<<< HEAD

  useEffect(() => {
    getAppData().then(onDataLoaded);
  }, []);

  const onDataLoaded = (data) => {
    setAppData(data);
  }

=======

  useEffect(() => {
    getAppData().then(onAppDataLoaded);
  }, []);
>>>>>>> 2ba937bc97553f962c7a4b818da4ca4344434387

  const onAppDataLoaded = (appData) => {
    setAppData(appData);
    console.log('loaded');
  }

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
            <AppDataContext.Provider value={{appData}}>
              <BurgerIngredients/>
              <BurgerConstructor/>
            </AppDataContext.Provider>
          </>
        }
      </main>
    </div>
  );
}

export default App;

