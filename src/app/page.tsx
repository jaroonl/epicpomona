import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import WeeklySchedule from "../components/WeeklySchedule"
import UpcomingEvents from "../components/UpcomingEvents";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <section className="py-16 bg-white">
        <WeeklySchedule />
      </section>
      <section className="py-16 bg-white">
        <UpcomingEvents />
      </section>
      <Footer />
    </div>
  );
}
