import Image from "next/image";
import { Event } from "../app/UpcomingEvents/Events";

interface EventCardProps {
  event: Event;
}

const LocationIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.5 1C4.567 1 3 2.567 3 4.5C3 7.375 6.5 12 6.5 12S10 7.375 10 4.5C10 2.567 8.433 1 6.5 1ZM6.5 5.875C5.742 5.875 5.125 5.258 5.125 4.5C5.125 3.742 5.742 3.125 6.5 3.125C7.258 3.125 7.875 3.742 7.875 4.5C7.875 5.258 7.258 5.875 6.5 5.875Z"
      fill="#1D2046"
    />
  </svg>
);

const ClockIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 1C3.243 1 1 3.243 1 6C1 8.757 3.243 11 6 11C8.757 11 11 8.757 11 6C11 3.243 8.757 1 6 1ZM6 2C8.206 2 10 3.794 10 6C10 8.206 8.206 10 6 10C3.794 10 2 8.206 2 6C2 3.794 3.794 2 6 2ZM5.5 3V6.207L8.146 7.854L8.854 7.146L6.5 4.793V3H5.5Z"
      fill="#1D2046"
    />
  </svg>
);

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="card-container">
      {/* Card Image */}
      <div className="card-image-container">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="card-image"
        />
      </div>

      {/* Card Title */}
      <h3 className="card-title">{event.title}</h3>

      {/* Description */}
      <p className="card-description">{event.description}</p>

      {/* Date, Time, Location and Button */}
      <div className="card-footer">
        <div className="card-info">
          <div className="card-details">
            {/* Location */}
            <div className="info-item">
              <LocationIcon />
              <span className="info-text">{event.location}</span>
            </div>

            {/* Time */}
            <div className="info-item">
              <ClockIcon />
              <div className="info-text">
                <span className="font-bold">{event.day}</span>
                <span className="font-normal">: {event.time}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button className="action-button">
          <span className="button-text">➜</span>
        </button>
      </div>

      <style jsx>{`
        .card-container {
          display: flex;
          width: 100%;
          max-width: 225px;
          min-height: 359px;
          padding: 20px;
          flex-direction: column;
          align-items: flex-start;
          gap: 14px;
          border-radius: 8px;
          background: rgba(250, 249, 246, 0.5);
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
          margin: 0 auto;
        }

        .card-image-container {
          position: relative;
          width: 100%;
          aspect-ratio: 185/186;
          border-radius: 4px;
          overflow: hidden;
        }

        .card-image {
          object-fit: cover;
          border-radius: 4px;
        }

        .card-title {
          align-self: stretch;
          color: #1d2046;
          font-family:
            Outfit,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: clamp(16px, 4vw, 20px);
          font-style: normal;
          font-weight: 700;
          line-height: 110%;
          text-transform: capitalize;
          margin: 0;
        }

        .card-description {
          align-self: stretch;
          color: #1d2046;
          font-family:
            Outfit,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: clamp(11px, 2.5vw, 12px);
          font-style: normal;
          font-weight: 300;
          line-height: 120%;
          text-transform: capitalize;
          margin: 0;
          flex-grow: 1;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          align-self: stretch;
          margin-top: auto;
        }

        .card-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 20px;
          flex-grow: 1;
        }

        .card-details {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 4px;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .info-text {
          color: #1d2046;
          font-family:
            Outfit,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: clamp(10px, 2.5vw, 12px);
          font-style: normal;
          font-weight: 300;
          line-height: 120%;
        }

        .font-bold {
          font-weight: 700;
        }

        .font-normal {
          font-weight: 400;
        }

        .action-button {
          display: flex;
          width: 38px;
          height: 34px;
          padding: 10px 12px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          border-radius: 12px;
          background: #0093d0;
          border: none;
          cursor: pointer;
          flex-shrink: 0;
          transition: background-color 0.2s ease;
        }

        .action-button:hover {
          background: #007bb3;
        }

        .action-button:active {
          transform: translateY(1px);
        }

        .button-text {
          color: #faf9f6;
          font-family:
            Outfit,
            -apple-system,
            Roboto,
            Helvetica,
            sans-serif;
          font-size: clamp(16px, 4vw, 20px);
          font-style: normal;
          font-weight: 400;
          line-height: 137.5%;
        }

        /* Mobile specific adjustments */
        @media (max-width: 640px) {
          .card-container {
            max-width: 280px;
            padding: 16px;
            gap: 12px;
          }

          .card-details {
            gap: 6px;
          }

          .card-footer {
            gap: 12px;
          }

          .action-button {
            width: 36px;
            height: 32px;
            padding: 8px 10px;
          }
        }

        /* Tablet adjustments */
        @media (min-width: 641px) and (max-width: 1024px) {
          .card-container {
            max-width: 240px;
          }
        }

        /* Desktop adjustments */
        @media (min-width: 1025px) {
          .card-container {
            max-width: 225px;
            min-height: 359px;
          }
        }
      `}</style>
    </div>
  );
}