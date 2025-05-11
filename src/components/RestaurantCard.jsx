import { CDN_URL } from "../utils/constants";
import { COVID_URL } from "../utils/constants";

const getRatingStyle = (avgRating) => {
  let baseStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid",
    backgroundColor: "transparent",
    color: "#fff",
    fontSize: "13px",
    borderRadius: "30px",
    height: "20px",
    width: "40px",
    margin: "7.2px 0"
  };

  if (avgRating < 3) {
    return { ...baseStyle, backgroundColor: "red", borderColor: "red" };
  } else if (avgRating >= 3 && avgRating < 4) {
    return { ...baseStyle, backgroundColor: "orange", borderColor: "orange" };
  } else {
    return { ...baseStyle, backgroundColor: "green", borderColor: "rgb(36, 150, 63)" };
  }
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { avgRating } = resData?.info;

  return (
    <div className="Food-item">
      <div className="Food-item-margin">
        <span className="Food-item-link">
          <div className="card-img">
            <img src={CDN_URL + resData?.info.cloudinaryImageId} alt="restaurant img" />
          </div>
          <div className="off">
            <p>
              {resData?.info.aggregatedDiscountInfoV3?.header
                ? `${resData?.info.aggregatedDiscountInfoV3.header}${
                    resData?.info.aggregatedDiscountInfoV3.subHeader
                      ? ` ${resData?.info.aggregatedDiscountInfoV3.subHeader}`
                      : ""
                  }`
                : "Flat Rs. 49 OFF"}
            </p>
          </div>
        </span>
        <span className="Food-item-link">
          <div className="pname">
            <h4>{resData?.info.name}</h4>
            <div style={getRatingStyle(avgRating)}>
              <p style={{ margin: "0 5px" }}>{avgRating}</p>
              <i className="fa-solid fa-star" style={{ color: "#ffffff" }} />
            </div>
          </div>
          <div className="Category">
            <p className="p1">{resData?.info.cuisines.join(", ")}</p>
            <p className="p2">{resData?.info.costForTwo}</p>
          </div>
          <div className="time">
            <p>{resData?.info.sla.deliveryTime} min</p>
          </div>
          <div className="line"></div>
          <div className="covid">
            <div className="covid-img">
              <img src={COVID_URL} alt="Covid img" />
            </div>
            <p>Follows all Max Safety measures to ensure your food is safe</p>
          </div>
        </span>
      </div>
    </div>
  );
};

export default RestaurantCard;