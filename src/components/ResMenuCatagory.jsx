import ResMenuItemList from "./ResMenuItemList";

const ResMenuCatagory = ({ data, showItems, setShowIndex }) => {
  const { title, itemCards } = data;

  return (
    <div className="w-full flex flex-col m-auto my-2 p-2 shadow-lg bg-white rounded-2xl">
      <div
        onClick={() => setShowIndex()}
        className="flex justify-between hover:bg-amber-400 p-2 cursor-pointer rounded-2xl"
      >
        <div className="font-bold">
          {title} ({itemCards.length})
        </div>
        <div>⬇️</div>
      </div>

      {showItems && <ResMenuItemList data={itemCards} />}
    </div>
  );
};
export default ResMenuCatagory;
