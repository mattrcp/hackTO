import Hero from "../components/Hero";

import Navigation from "../components/Navigation";
import SearchEvents from "../components/SearchEvents";
import Sponsors from "../components/Sponsors";
import Upcoming from "../components/Upcoming";
import Nav from "../components/navigation/Nav";
import Footer from "../components/Footer";
import PickArticle from "../components/PickArticle";

export default function Home() {
  return (
    <div>
      <Nav />
      <Navigation />
      <main className="">
        <Hero />
        {/* <Sponsors /> */}
        {/* <Upcoming /> */}
        <SearchEvents />
        <PickArticle />
      </main>
      <Footer />
    </div>
  );
}
