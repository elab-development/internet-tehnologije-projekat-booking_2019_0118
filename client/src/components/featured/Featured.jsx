import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:8800/hotels/countByCity?cities=Belgrade,Novi Sad,Niš"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/600x600/637152.jpg?k=e0c8290998356aa03d1ab85530d425b75a4958f5b06aca8c1bc55a638a988d7f&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Belgrade</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/600x600/638266.jpg?k=e400af34c312614dd3bf1172aab0fa961486151a440c459e01c7767a92786bf9&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Novi Sad</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/600x600/638235.jpg?k=6bde21198ca1faf7846bb9ba9f6308066935185f89431ee83208f3483c381d57&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Niš</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
