import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/484087545.webp?k=94b4a5f80c032c5edf87051dc1c6aa0af988bb624e811355b6ed71d9f04aee77&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hilton Belgrade</span>
        <span className="fpCity">Belgrade</span>
        <span className="fpPrice">Starting from $199</span>
        <div className="fpRating">
          <button>9.6</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/15679136.webp?k=603999f6dbe1e92bbc6ab54647d165187497d6b5c3a87f721964f2497adce5be&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Garni Hotel Aleksandar</span>
        <span className="fpCity">Novi Sad</span>
        <span className="fpPrice">Starting from $99</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Fabulous</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/208632797.webp?k=122fc0f67b9faccb317e8a08e680bf689c71ec0ac96abbc8bc0bcdadc733b2db&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hotel Ambasador</span>
        <span className="fpCity">Niš</span>
        <span className="fpPrice">Starting from $140</span>
        <div className="fpRating">
          <button>9.4</button>
          <span>Superb</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/196135134.webp?k=100de44bbfcd087551113f3c233c8d8abe93516a0d0e6546b523ba319ed08ceb&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">CENTAR President</span>
        <span className="fpCity">Arandjelovac</span>
        <span className="fpPrice">Starting from $69</span>
        <div className="fpRating">
          <button>9.8</button>
          <span>Exceptional</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
