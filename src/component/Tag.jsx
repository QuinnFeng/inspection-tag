import { images } from "../assets/Image";

const Tag = () => {
  const year = 2025;
  const month = 10;
  const asterisk_count = 5;

  return (
    <>
      <div className="tag">
        <div className="main">
          <div className="top center">
            <h3>new jersey motor vehicle commission vehicle inspection</h3>
            <h4>expires last day of the month displayed below</h4>
          </div>
          <div className="date">
            <div className="side">
              <span>{Math.floor(year / 100)}</span>
              <div className="asterisk">
                {Array.from(
                  { length: Math.min(3, asterisk_count) },
                  (element, index) => (
                    <span key={index}>
                      <i className="fa-solid fa-asterisk"></i>
                    </span>
                  )
                )}
              </div>
            </div>
            <div className="middle center">
              <div className="middle-bg"></div>
              <div className="month">
                <p>{month}</p>
              </div>
            </div>
            <div className="side">
              <span>{year % 100}</span>
              <div className="asterisk">
                {Array.from(
                  { length: asterisk_count - 3 <= 0 ? 0 : asterisk_count - 3 },
                  (element, index) => (
                    <span key={index}>
                      <i className="fa-solid fa-asterisk"></i>
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="number">
          <span className="barcode">
            <img
              src={images.barcode}
              alt="barcode"
            />
          </span>
          <span className="No">No.1576892</span>
        </div>
        <div className="bottom">
          {/* {Array.from({ length: 6 }, (element, index) => (
            <span key={index}>{year}</span>
          ))} */}
        </div>
      </div>
    </>
  );
};

export default Tag;
