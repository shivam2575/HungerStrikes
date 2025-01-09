const RestaurantCard = (props) => {
  const { resData } = props;
  const { image, name, cuisine, rating, cfo } = resData?.info;
  const cusineList = cuisine.map((item) => item.name);

  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src={image.url} />
      <h3>{name}</h3>
      <h4>{cusineList.join(", ")}</h4>
      <h5>{resData.order.deliveryTime} minutes</h5>
      <h5>{rating.rating_text} stars</h5>
      <h6>{cfo.text}</h6>
    </div>
  );
};

export default RestaurantCard;
