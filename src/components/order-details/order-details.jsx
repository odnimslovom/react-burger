import orderDetailsStyles from './order-details.module.css';
import {orderItemTypes} from "../../utils/propTypes";

const OrderDetails = ({order}) => {
  return (
    <>
      <h2 className={`${orderDetailsStyles.id} mt-30 mb-8 text text_type_digits-large`}>
        {order.id}
      </h2>
      <p className={'text text_type_main-medium'}>идентификатор заказа</p>
      <img className={`${orderDetailsStyles.image} mt-15 mb-15`}
           src={order.image}
           alt={'Order accepted'}/>
      <p className={'mb-2 text_type_main-default'}>{order.status}</p>
      <p className={'mb-30 text text_type_main-default text_color_inactive'}>{order.info}</p>
    </>
  );
}

OrderDetails.propTypes = {
  order : orderItemTypes
}

export default OrderDetails;
