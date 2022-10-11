import orderDetailsStyles from './order-details.module.css';
import orderAcceptedImg from '../../images/order/order_accepted.png';
import {orderItemTypes} from "../../utils/propTypes";

const OrderDetails = ({id, success}) => {

  const successMessage = success ? 'Ваш заказ начали готовить' : 'Что-то пошло не так..';
  const infoMessage = success ? 'Дождитесь\n' +
    'готовности на орбитальной станции' : 'Попробуйте заказать еще раз!'

  return (
    <>
      <h2 className={`${orderDetailsStyles.id} mt-30 mb-8 text text_type_digits-large`}>
        {id}
      </h2>
      <p className={'text text_type_main-medium'}>Идентификатор заказа</p>
      <img className={`${orderDetailsStyles.image} mt-15 mb-15`}
           src={orderAcceptedImg}
           alt={'Order accepted'}/>
      <p className={'mb-2 text_type_main-default'}>{successMessage}</p>
      <p className={'mb-30 text text_type_main-default text_color_inactive'}>{infoMessage}</p>
    </>
  );
}

OrderDetails.propTypes = orderItemTypes;

export default OrderDetails;
