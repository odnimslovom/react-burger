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

  useEffect(() => {
    getAppData().then(onAppDataLoaded);
  }, []);


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
              {/*<BurgerConstructor/>*/}
            </AppDataContext.Provider>
          </>
        }
      </main>
    </div>
  );
}

export default App;

