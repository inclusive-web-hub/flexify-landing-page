import React, { useState } from "react";

function Certification({ certification }) {
  const { category, title, image, link } = certification;
  const [toggler, setToggler] = useState(false);

  const handleLightbox = (e) => {
    if (!link) {
      e.preventDefault();
      setToggler(!toggler);
    }
  };
  return (
    <div className="bg-black shadow-dark rounded">
      <a
        href={link ? link : "!#"}
        className="certification-image"
        as="certification"
        onClick={handleLightbox}
        target="_blank"
        rel="noreferrer"
      >
        <div className="certification-item rounded shadow-dark border border-primary">
          <div className="details">
            <span className="term text-capitalize">{category}</span>
            <h4 className="title">{title}</h4>
            <span className="more-button">
              <i className="fa-solid fa-link text-primary"></i>
            </span>
          </div>
          <div className="thumb">
            <img src={image} alt="Certification-title" loading="lazy" />
            <div className="mask"></div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Certification;
