import ResMenuItemList from "./ResMenuItemList";

const ResMenuCatagory = ({ data }) => {
  const { title, itemCards } = data;
  return (
    <div className="border w-full flex flex-col m-auto my-2 p-2  ">
      <div className="flex justify-between hover:bg-amber-400 p-2 cursor-pointer">
        <div className="font-bold">
          {title} ({itemCards.length})
        </div>
        <div>⬇️</div>
      </div>

      <ResMenuItemList data={itemCards} />
    </div>
  );
};
export default ResMenuCatagory;
