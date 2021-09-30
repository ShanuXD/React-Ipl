import React from "react";

const Card = ({ player }) => {
  const { name, country, img_url, skills, stats, info } = player;
  const statsHeaders = Object.keys(stats);
  const infoHeaders = Object.keys(info);
  const skillsHeaders = Object.keys(skills);

  const detailsRef = React.useRef(null)
  const buttonRef = React.useRef(null)


  const showInfo = ()=>{
    if(detailsRef.current.classList.contains("show")){
      detailsRef.current.classList.remove("show")
      buttonRef.current.innerText = "Show more"
    }
    else{
      detailsRef.current.classList.add("show")
      buttonRef.current.innerText = "Show Less"
    }
  }


  return (
    <div className="card">
      <div className="text">
        <h3>{name}</h3>
        <h4 className="">{country}</h4>
      </div>
      <img src={img_url} alt={name} className="image" />
      <table className="stats-table">
        <thead>
          <tr>
            {statsHeaders.map((heading, index) => (
              <th key={index}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {statsHeaders.map((heading, index) => (
              <th key={index}>{stats[heading]}</th>
            ))}
          </tr>
        </tbody>
      </table>
      <button className="know-more" ref={buttonRef} onClick={showInfo}>Show More</button>
      <div className="more-details " ref={detailsRef}>
        <div className="skills">
          {skillsHeaders.map((heading, index) => {
            return (
              <div className="skills-container" key={index}>
                <span className="skills-heading">{heading}:</span>
                <span className="skills-value">{skills[heading]}</span>
              </div>
            );
          })}
        </div>
        <div className="info">
          {infoHeaders.map((heading, index) => {
            return (
              <div key={index}>
                {info[heading] === "" ? null : (
                  <div className="info-container">
                    <span className="info-heading">{heading}:</span>
                    <span className="info-value">{info[heading]}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
