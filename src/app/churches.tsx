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
      src="/images/epicNotChurch.svg"
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
                Local churches provide a community that will extend beyond your time in college and Epic. Parachurch ministries, including Epic, are not meant to take the place of churches or do everything that churches do. We strongly encourage everyone to attend a church!
              </p>

              <p className="new-area-text">
                If you&apos;re new to the area, Christianity, or just want to check out different churches, here are some local churches that we can provide rides to on Sundays!
              </p>
            </div>
          </div>
        </section>

        {/* Church Ride Button */}
        <div className="cta-section">
          <a href="https://forms.gle/KBwBScj9r9M2acWR6" target="_blank" rel="noopener noreferrer">
            <button className="church-ride-button">
              CHURCH RIDE SIGN UP
            </button>
          </a>
        </div>

        
        {/* Local Churches Section */}
        <section className="churches-section">
          <div className="container-responsive">
            <h2 className="local-churches-heading">LOCAL CHURCHES</h2>

            {/* Church Cards */}
            <div className="church-cards-container">
              <ChurchCard
                name="First Chinese Baptist Church Walnut"
                location="1555 Fairway Dr,
Walnut, CA 91789"
                time="10:45 AM - 12:00 PM"
                image="/images/fcbcWalnut.svg"
                locationLink="https://maps.app.goo.gl/757uG9VJ3kEnsEG37"
                ministryInfo="TURF(Ministry): first three Fridays, 7:30-10:00 pm"
                ministryWebsite="https://english.fcbcwalnut.org/"
              />

              <ChurchCard
                name="Anchor Community Church"
                location="841 Glenwick Ave
Walnut, CA 91789"
                time="11:15 AM"
                image="/images/anchor.svg"
                locationLink="https://maps.app.goo.gl/GR19ZX2kPpQVmzpy5"
                ministryInfo=""
                ministryWebsite="https://www.anchor.community/"
              />

              <ChurchCard
                name="Crossway Community Church"
                location="975 W Imperial Highway Suite 150 Brea, CA 92821"
                time="10:30 AM"
                image="/images/crossway.svg"
                locationLink="https://maps.app.goo.gl/pjgMVhiUsjv6t2Rg7"
                ministryInfo="TWO:FORTYTWO (College & Young Adult Ministry): Fridays, 7:30-10:00 pm"
                ministryWebsite="https://crosswayoc.com/"
              />
            </div>
          </div>
        </section>

        {/* Google Maps Button */}
        <div className="maps-section">
          <a href="https://maps.app.goo.gl/pknMMkb7Jnb33cjF7" target="_blank" rel="noopener noreferrer">
            <button className="google-maps-button">
              GOOGLE MAPS
            </button>
          </a>
        </div>

        

        {/* Map */}
        <section className="map-section">
          <div className="container-responsive">
            <img
              className="map-image"
              src="/images/churchMap.svg"
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
