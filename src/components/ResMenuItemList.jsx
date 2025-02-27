import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { IMAGE_API } from "../utils/constants";

const ResMenuItemList = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <div>
      {data.map((item) => (
        <div key={item.card.info.id} className="flex border-b justify-between">
          <div className=" m-2 p-1 flex flex-col w-9/12">
            <div className="m-1 flex justify-between">
              <span>{item.card.info.name}</span>
              <span>
                ₹ {(item.card.info.price || item.card.info.defaultPrice) / 100}
              </span>
            </div>
            <div className="m-1 font-extralight text-xs">
              {item.card.info.description}
            </div>
          </div>
          <div>
            <img
              className="rounded-2xl w-34 h-34 m-1 p-1"
              alt="restaurant menu item"
              src={IMAGE_API + item.card.info.imageId}
            />
            <div className="flex justify-evenly align-center">
              <button
                type="submit"
                className="border bg-black text-white m-2 p-2 rounded-lg cursor-pointer"
                onClick={() => {
                  dispatch(addItem(item));
                }}
              >
                +
              </button>
              <button
                type="submit"
                className="border bg-black text-white m-2 p-2 rounded-lg cursor-pointer"
                onClick={() => {
                  dispatch(removeItem(item));
                }}
              >
                -
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ResMenuItemList;
