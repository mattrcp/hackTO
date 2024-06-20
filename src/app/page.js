import Hero from "../components/Hero";

import Navigation from "../components/Navigation";
import SearchEvents from "../components/SearchEvents";
import Sponsors from "../components/Sponsors";
import Upcoming from "../components/Upcoming";
import Nav from "../components/navigaiton/Nav";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Nav />
      <Navigation />
      <main className="">
        <Hero />
        {/* <Sponsors /> */}
        <Upcoming />
        <SearchEvents />
      </main>
      <Footer />
    </div>
  );
}
