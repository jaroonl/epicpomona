import ChurchCard from "./components/ChurchCard";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function LocalChurches() {
  return (
    <div className="churches-page">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="main-content">
        {/* Main Title */}
        <section className="title-and-illustration-section">
  <div className="title-illustration-container">
    <h1 className="main-title">
      <span className="title-line">LOCAL</span>
      <span className="title-line">CHURCHES</span>
    </h1>
    <img
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/09e2cc40d039171ae8bb01379f198ea3a373e3d8?width=962"
      alt="Epic is not a church illustration"
      className="epic-illustration"
    />
  </div>
</section>


        {/* Epic not a church section */}
        <section className="epic-explanation-section">
          <div className="container-responsive">
            <div className="epic-content">
              <h2 className="not-church-heading">
                <span className="regular-text">While Epic is a Christian ministry, it is </span>
                <span className="underlined-text">not</span>
                <span className="regular-text"> a church</span>
              </h2>

              <h3 className="what-is-epic">What is Epic (in relationship to churches)?</h3>

                  <p className="explanation-text">
                Epic is a parachurch and not a local church. Here is a quick explanation of these two terms:
              </p>

              {/* Parachurch vs Local Church */}
              <div className="definitions-container">
                <div className="definition-item">
                  <h4 className="definition-title">PARACHURCH</h4>
                  <p className="definition-text">
                    Ministries that operate beside — therefore outside — individual or affiliate church structures
                  </p>
                </div>

                <div className="definition-item">
                  <h4 className="definition-title">Local Church</h4>
                  <p className="definition-text">
                    A local church is a mutually-affirming group of new covenant members and kingdom citizens, identified by regularly gathering together in Jesus&apos; name through preaching the gospel and celebrating the ordinances.
                  </p>
                </div>
              </div>

              <h3 className="why-church">Why is it important to attend a church?</h3>

              <p className="church-importance">
                Local churches provide a community that will extend beyond your time in college and EPIC. Parachurch ministries, including EPIC, are not meant to take the place of churches or do everything that churches do. We strongly encourage everyone to attend a church!
              </p>

              <p className="new-area-text">
                If you&apos;re new to the area, Christianity, or just want to check out different churches, here are some local churches that we can provide rides to on Sundays!
              </p>
            </div>
          </div>
        </section>

        {/* Church Ride Button */}
        <div className="cta-section">
          <button className="church-ride-button">
            CHURCH RIDE SIGN UP
          </button>
        </div>

        {/* Local Churches Section */}
        <section className="churches-section">
          <div className="container-responsive">
            <h2 className="local-churches-heading">LOCAL CHURCHES</h2>

            {/* Church Cards */}
            <div className="church-cards-container">
              <ChurchCard
                name="first Chinese Baptist Church Walnut"
                location="1555 Fairway Dr,
Walnut, CA 91789"
                time="10:45 AM - 12:00 PM"
                image="https://cdn.builder.io/api/v1/image/assets/TEMP/178366c59e2e239a0d2becf1d470d197e231fd16?width=550"
              />

              <ChurchCard
                name="Anchor Community Church"
                location="841 Glenwick Ave
Walnut, CA 91789"
                time="11:15 AM"
                image="https://cdn.builder.io/api/v1/image/assets/TEMP/f905a38fcea856df90351efe41adff05f16beba1?width=550"
              />

              <ChurchCard
                name="Crossway Community Church"
                location="975 W Imperial Highway Suite 150Brea, CA 92821"
                time="10:30"
                image="https://cdn.builder.io/api/v1/image/assets/TEMP/fb5e71c86a7153cb7ebdacbcb5377c066e9b7af4?width=550"
              />
            </div>
          </div>
        </section>

        {/* Google Maps Button */}
        <div className="maps-section">
          <button className="google-maps-button">
            GOOGLE MAPS
          </button>
        </div>

        {/* Map */}
        <section className="map-section">
          <div className="container-responsive">
            <img
              className="map-image"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/550a0c997beae7aa1ffb3365b000b133199b5669?width=1304"
              alt="Map showing local church locations"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
