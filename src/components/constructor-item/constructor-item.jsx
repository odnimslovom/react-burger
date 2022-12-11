import {useDispatch} from "react-redux";
import {useRef} from "react";
import {useDrag, useDrop} from "react-dnd";

import constructorItemStyles from './constructor-item.module.css';
import PropTypes from "prop-types";
import {ingredientItemTypes} from "../../utils/propTypes";

import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import {deleteFilling, moveFilling} from "../../services/actions/burger-constructor";

const ConstructorItem = ({item, idx}) => {
  const dispatch = useDispatch();
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: 'item',
    hover(item) {
      if (!ref.current) {
        return;
      }
      const dragIDX = item.idx;
      const hoverIDX = idx;
      dispatch(moveFilling(dragIDX, hoverIDX, item))
      item.idx = hoverIDX;
    }
  })

  const [, drag] = useDrag({
    type: 'item',
    item: {...item, idx},
    collect: monitor => ({
      isDrag: monitor.isDragging()
    })
  })

  drag(drop(ref));

  const deleteElement = (itemID) => {
    dispatch(deleteFilling(itemID));
  }

  return (
    <li className={`mt-4 pr-5 ${constructorItemStyles.item}`} ref={ref} draggable>
      <DragIcon/>
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image}
        handleClose={() => deleteElement(item.itemID)}
      />
    </li>
  )
}

ConstructorItem.propTypes = {
  item: ingredientItemTypes.isRequired,
  idx: PropTypes.number.isRequired
}

export default ConstructorItem;
