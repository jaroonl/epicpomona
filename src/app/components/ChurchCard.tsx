"use client";
import { useState } from "react";
import { IconMapPin, IconClock } from "@tabler/icons-react";

interface ChurchCardProps {
  name: string;
  location: string;
  time: string;
  image: string;
  locationLink: string;
  ministryInfo: string;        
  ministryWebsite: string;    
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
                <IconMapPin size={24} className="detail-icon text-[#1D2046]" />
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
                <IconClock size={24} className="detail-icon text-[#1D2046]" />
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
