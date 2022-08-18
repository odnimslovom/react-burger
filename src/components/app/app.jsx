import appStyles from './app.module.css';
import {DATA} from '../../utils/data.js';

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingridients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

const App = () => {
  return (
    <div className={appStyles.app}>
      <AppHeader/>
      <main className={appStyles.content}>
        <BurgerIngredients data={DATA}/>
        <BurgerConstructor data={DATA}/>
      </main>
    </div>
  );
}

export default App;

