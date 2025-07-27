interface ChurchCardProps {
  name: string;
  location: string;
  time: string;
  image: string;
}

export default function ChurchCard({ name, location, time, image }: ChurchCardProps) {
  return (
    <article className="church-card">
      <div className="card-image">
        <img
          src={image}
          alt={`${name} church building`}
        />
      </div>
      <h3 className="church-name">
        {name}
      </h3>
      <div className="church-details">
        <div className="details-info">
          <div className="location-info">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/18a94a0dcd8d776ee3da3387014c64957783fb7c?width=26"
              alt="Location icon"
              className="detail-icon"
            />
            <div className="location-text">{location}</div>
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
        <button className="arrow-button" aria-label={`Learn more about ${name}`}>
          ➜
        </button>
      </div>
    </article>
  );
}
