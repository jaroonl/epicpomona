"use client";
import { useState } from "react";

interface ChurchCardProps {
  name: string;
  location: string;
  time: string;
  image: string;
  locationLink: string;
  ministryInfo: string;        // add ministry info text
  ministryWebsite: string;     // add ministry website link
}

export default function ChurchCard({
  name,
  location,
  time,
  image,
  locationLink,
  ministryInfo,
  ministryWebsite,
}: ChurchCardProps) {
  const [showBack, setShowBack] = useState(false);

  return (
    <article className="church-card">
      <div className="card-image">
        <img src={image} alt={`${name} church building`} />
      </div>

      {/* Front side info */}
      {!showBack && (
        <>
          <h3 className="church-name">{name}</h3>
          <div className="church-details">
            <div className="details-info">
              <div className="location-info">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/18a94a0dcd8d776ee3da3387014c64957783fb7c?width=26"
                  alt="Location icon"
                  className="detail-icon"
                />
                <a
                  href={locationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="location-text hover:underline text-blue-600"
                >
                  {location}
                </a>
              </div>
              <div className="time-info">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b72f9e8d5d17983af00e58dc93f6ccf7a71d8f54?width=24"
                  alt="Clock icon"
                  className="detail-icon"
                />
                <div className="time-text">
                  <span className="time-day">Sunday</span>
                  <span className="time-hours">: {time}</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Back side info */}
      {showBack && (
        <div className="church-back-info">
          <p>{ministryInfo}</p>
          <a
            href={ministryWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="ministry-link hover:underline text-blue-600"
          >
            Visit {name} Website
          </a>
        </div>
      )}

      <button
        className="arrow-button"
        aria-label={`Toggle details about ${name}`}
        onClick={() => setShowBack(!showBack)}
      >
        ➜
      </button>
    </article>
  );
}
