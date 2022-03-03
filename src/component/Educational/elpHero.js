import iconChevron from "./../../assets/static/images/title/iconChevron.svg";

const ElpHome = ({ Data }) => {
  return (
    <div className="elp-hero-wrapper">
      <div className="elp-left-content">
        <p>{Data.Title} </p>
        <h1>{Data.Header} </h1>
        <h2>{Data.SubHeader}</h2>
        <div className="chevron-icon-container">
          <img src={iconChevron} alt="Scroll Further Icon" />
        </div>
      </div>
      <div className="elp-right-content">
        <img src={Data.ImageUrl} alt="Educational Page background" />
      </div>
    </div>
  );
};

export default ElpHome;
