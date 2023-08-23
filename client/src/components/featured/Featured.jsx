import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch("hotels/countByCity?cities=Kandy,Colombo,Gampaha");

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait..."
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5a3bb03b4c326d76de73ddaa/64166deb-5566-459e-9c4d-a4d8413c97fd/The_Common_Wanderer_-4336.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Kandy</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://bangkokattractions.com/wp-content/uploads/2023/04/colombo.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Colombo</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://www.seabourn.com/content/dam/sbn65/inventory-assets/ports/i/gal/port-galle-sri-lanka.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Galle</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
      ;
    </div>
  );
};

export default Featured;
