import orderDetailsStyles from './order-details.module.css';
import {orderItemTypes} from "../../utils/propTypes";

import orderAcceptedImg from '../../images/order/order_accepted.png';

const OrderDetails = ({order}) => {
  const statusMessage = order.success ? 'Ваш заказ начали готовить' : 'Что-то пошло не так..';
  const infoMessage = order.success ? 'Дождитесь\n' +
    'готовности на орбитальной станции' : 'Попробуйте заказать еще раз!'

  return (
    <>
      <h2 className={`${orderDetailsStyles.id} mt-30 mb-8 text text_type_digits-large`}>
        {order.order.number}
      </h2>
      <p className={'text text_type_main-medium'}>Идентификатор заказа</p>
      <img className={`${orderDetailsStyles.image} mt-15 mb-15`}
           src={orderAcceptedImg}
           alt={'Order accepted'}/>
      <p className={'mb-2 text_type_main-default'}>{statusMessage}</p>
      <p className={'mb-30 text text_type_main-default text_color_inactive'}>{infoMessage}</p>
    </>
  );
}

OrderDetails.propTypes = orderItemTypes;

export default OrderDetails;
