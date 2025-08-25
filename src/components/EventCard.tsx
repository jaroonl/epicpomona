"use client";

import { useState } from "react";
import Image from "next/image";
import { Event } from "@/types/events";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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

const BackIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.33333 5L3.33333 10L8.33333 15M3.33333 10H16.6667"
      stroke="#FAF9F6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function EventCard({ event }: EventCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div ref={ref} className={`card-wrapper animate-fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className={`card-container ${isFlipped ? 'flipped' : ''}`}>
        {/* Front Side */}
        <div className="card-side card-front">
          {/* Card Image */}
          <div className="card-image-container">
            <Image
              src={event.image}
              alt={event.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="card-image"
            />
            {/* Date Bubble */}
            <div className="date-bubble">
              {event.date}
            </div>
          </div>

          {/* Centered Content */}
          <div className="card-content">
            {/* Card Title */}
            <h3 className="card-title">{event.title}</h3>

            {/* Description */}
            <p className="card-description">{event.description}</p>
          </div>

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
            <button className="action-button" onClick={handleFlip}>
              <span className="button-text">➜</span>
            </button>
          </div>
        </div>

        {/* Back Side */}
        <div className="card-side card-back">
          {/* Back Header */}
          <h3 className="card-title">{event.title}</h3>

          {/* Additional Information */}
          <div className="card-back-info">
            {event.longDescription && (
              <div className="info-section">
                <h4 className="info-title">Details</h4>
                <p className="info-content">{event.longDescription}</p>
              </div>
            )}

            {/* When */}
            <div className="info-section">
              <h4 className="info-title">When</h4>
              <p className="info-content">{event.day}, {event.date} at {event.time}</p>
            </div>

            {/* Where */}
            <div className="info-section">
              <h4 className="info-title">Where</h4>
              <p className="info-content">{event.location}</p>
            </div>



            {event.cost && (
              <div className="info-section">
                <h4 className="info-title">Cost</h4>
                <p className="info-content">{event.cost}</p>
              </div>
            )}





            {event.registrationLink && (
              <div className="info-section">
                <a
                  href={event.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="registration-link"
                >
                  Register Now →
                </a>
              </div>
            )}

            {/* Discord link for events (not retreats) */}
            {!event.registrationLink && (
              <div className="info-section">
                <a
                  href="https://discord.gg/r336sM2vF5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="discord-link"
                >
                  Join our Discord for More Info →
                </a>
              </div>
            )}
          </div>

          {/* Back Button - Same position as front */}
          <div className="card-footer">
            <div className="card-info">
              <div className="card-details">
                {/* Empty space to maintain layout */}
              </div>
            </div>
            <button className="back-button" onClick={handleFlip}>
              <BackIcon />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .card-wrapper {
          perspective: 1000px;
          width: 364px;
          min-height: 581px;
          margin: 0;
        }

        .card-container {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 359px;
          transform-style: preserve-3d;
          transition: transform 0.6s ease-in-out;
        }

        .card-container.flipped {
          transform: rotateY(180deg);
        }

        .card-side {
          position: absolute;
          width: 100%;
          height: 100%;
          min-height: 581px;
          backface-visibility: hidden;
          border-radius: 8px;
          background: rgba(250, 249, 246, 0.5);
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        }

        .card-front {
          display: flex;
          padding: 20px;
          flex-direction: column;
          align-items: flex-start;
          gap: 14px;
        }

        .card-content {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-self: stretch;
          gap: 14px;
          padding: 8px 0;
        }

        .card-back {
          transform: rotateY(180deg);
          display: flex;
          padding: 20px;
          flex-direction: column;
          align-items: flex-start;
          gap: 14px;
          background: rgba(250, 249, 246, 0.5);
        }

        .card-image-container {
          position: relative;
          width: 100%;
          aspect-ratio: 185/186;
          border-radius: 4px;
          overflow: visible;
          margin-bottom: 8px;
        }

        .card-image {
          object-fit: cover;
          border-radius: 4px;
        }

        .date-bubble {
          position: absolute;
          bottom: -16px;
          left: 12px;
          background: rgba(0, 147, 208, 0.95);
          color: #faf9f6;
          font-family: Outfit, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 12px;
          font-weight: 700;
          padding: 8px 15px;
          border-radius: 16px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          backdrop-filter: blur(8px);
          z-index: 50;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .card-title {
          align-self: stretch;
          color: #1d2046;
          font-family: Outfit, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: clamp(24px, 6vw, 25px);
          font-style: normal;
          font-weight: 600;
          line-height: 110%;
          text-transform: capitalize;
          margin: 0;
        }

        .card-description {
          align-self: stretch;
          color: #1d2046;
          font-family: Outfit, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: clamp(12px, 2.5vw, 17px);
          font-style: normal;
          font-weight: 300;
          line-height: 120%;
          margin: 0;
          flex-grow: 0;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
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
          font-family: Outfit, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: clamp(10px, 2.5vw, 17px);
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

        .action-button,
        .back-button {
          box-sizing: border-box;
          display: flex;
          width: 44px;
          height: 44px;
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

        .action-button:hover,
        .back-button:hover {
          background: #007bb3;
        }

        .action-button:active,
        .back-button:active {
          transform: translateY(1px);
        }

        .button-text {
          color: #faf9f6;
          font-family: Outfit, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: clamp(16px, 4vw, 20px);
          font-style: normal;
          font-weight: 400;
          line-height: 137.5%;
        }

        /* Back Side Styles */
        .card-back-info {
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex-grow: 1;
          overflow-y: auto;
          padding-right: 4px;
          align-self: stretch;
        }

        .card-back-info::-webkit-scrollbar {
          width: 3px;
        }

        .card-back-info::-webkit-scrollbar-track {
          background: rgba(29, 32, 70, 0.1);
          border-radius: 3px;
        }

        .card-back-info::-webkit-scrollbar-thumb {
          background: rgba(0, 147, 208, 0.7);
          border-radius: 3px;
        }

        .info-section {
          display: flex;
          flex-direction: column;
          gap: 2px;
          flex-shrink: 0;
        }

        .info-title {
          color: #0093d0;
          font-family: Outfit, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: clamp(10px, 2.5vw, 12px);
          font-weight: 600;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }

        .info-content {
          color: #1d2046;
          font-family: Outfit, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: clamp(9px, 2.2vw, 17px);
          font-weight: 300;
          line-height: 130%;
          margin: 0;
        }

        .registration-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: #0093d0;
          font-family: Outfit, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: clamp(15px, 2.5vw, 17px);
          font-weight: 600;
          text-decoration: none;
          border: 1px solid #0093d0;
          padding: 6px 12px;
          border-radius: 6px;
          transition: all 0.2s ease;
          margin-top: 4px;
          flex-shrink: 0;
        }

        .registration-link:hover {
          background: #0093d0;
          color: #faf9f6;
        }

        .discord-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: #5865F2;
          font-family: Outfit, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: clamp(15px, 2.5vw, 17px);
          font-weight: 600;
          text-decoration: none;
          border: 1px solid #5865F2;
          padding: 6px 12px;
          border-radius: 6px;
          transition: all 0.2s ease;
          margin-top: 4px;
          flex-shrink: 0;
        }

        .discord-link:hover {
          background: #5865F2;
          color: #faf9f6;
        }



        /* Mobile specific adjustments */
        @media (max-width: 640px) {
          .card-wrapper {
            width: 100%;
            max-width: 360px;
            min-height: 520px;
            margin: 0 auto;
          }

          .card-front {
            padding: 14px;
            gap: 10px;
          }

          .card-back {
            padding: 14px;
          }

          .card-side {
            min-height: 520px;
            overflow: hidden;
          } 

          .card-details {
            gap: 4px;
          }

          .card-content {
            gap: 8px;
          }

          .card-footer {
            gap: 8px;
            align-items: center;
            margin-top: 6px;
          }

          .action-button,
          .back-button {
            position: static;
            width: 36px;
            height: 36px;
            padding: 0px;
          }

          .card-back-info {
            gap: 6px;
          }

          .card-description {
            flex-grow: 0;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .info-title {
            font-size: 17px;
            letter-spacing: 0.2px;
          }

          .info-content {
            font-size: 15px;
            line-height: 125%;
          }
        }

        /* Tablet adjustments */
        @media (min-width: 641px) and (max-width: 1024px) {
          .card-wrapper {
            width: 100%;
            max-width: 300px;
            min-height 500px;
            margin: 0 auto;
          }
        }

        /* Desktop adjustments */
        @media (min-width: 1025px) {
          .card-wrapper {
            width: 364px;
          }

          .card-side {
            min-height: 581px;
          }
        }
      `}</style>
    </div>
  );
}
