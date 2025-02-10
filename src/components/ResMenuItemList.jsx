import { IMAGE_API } from "../utils/constants";

const ResMenuItemList = ({ data }) => {
  console.log(data);
  return (
    <div className="border">
      {data.map((item) => (
        <div className="flex border-b justify-between">
          <div
            className=" m-2 p-1 flex flex-col w-9/12"
            key={item.card.info.id}
          >
            <div className="m-1 flex justify-between">
              <span>{item.card.info.name}</span>
              <span>
                {(item.card.info.price || item.card.info.defaultPrice) / 100}
              </span>
            </div>
            <div className="m-1 font-extralight text-sm">
              {item.card.info.description}
            </div>
          </div>
          <div className="w-3/12 rounded-lg">
            <img
              className="w-full h-25 rounded-2x object-contain"
              src={IMAGE_API + item.card.info.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ResMenuItemList;
