import React from "react";
import SmallCards from "../components/SmallCards";
import MediumCards from "../components/MediumCards";
import LargeCard from "./LargeCard";
import DelhiPic from "../public/images/delhi.jpeg";
import DelhiPic2 from "../public/images/delhi2.jpeg";
import GoaPic from "../public/images/goa.jpeg";
import K1 from "../public/images/k1.jpeg";
import K2 from "../public/images/k2.png";
import JK from "../public/images/jk.jpeg";
import mdPic1 from "../public/images/md-pic1.jpeg";
import mdPic2 from "../public/images/md-pic2.jpeg";
import mdPic3 from "../public/images/md-pic3.jpeg";
import mdPic4 from "../public/images/md-pic4.jpeg";
import LgPic from "../public/images/lg.webp";

function Cities({}) {
  return (
    <div>
      <main className="max-w-7xl mx-auto px-8 sm:px-15 bg-black">
        <section className="py-10 text-white">
          <h2 className="text-4xl font-semibold pb-5 ">Browse Nearby:</h2>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            <SmallCards
              location="Chandni Chowk - Delhi"
              img={DelhiPic}
              destination="10 min Walk / 5 min Metro"
            />
            <SmallCards
              location="India Gate - Delhi"
              img={DelhiPic2}
              destination="30 min Walk / 15 min Metro"
            />
            <SmallCards
              location="Hollant Beach - Goa"
              img={GoaPic}
              destination="5 min Walk"
            />
            <SmallCards
              location="Victoria Memorial - Kolkata"
              img={K1}
              destination="20 min Car"
            />
            <SmallCards
              location="Howrah Bridge - Kolkata"
              img={K2}
              destination="30 min Car"
            />
            <SmallCards
              location="Dal Lake - Srinagar"
              img={JK}
              destination="10 min Walk"
            />
          </div>
        </section>

        <section className="text-white">
          <h1 className="text-4xl font-semibold pb-5">Live Anywhere:</h1>
          <div className="flex space-x-4 overflow-scroll overflow-y-hidden scrollbar-hide p-5 -ml-8 pb-11">
            <MediumCards location="Outdoor Getaways" img={mdPic1} />
            <MediumCards location="Out of the Box Architecture" img={mdPic2} />
            <MediumCards location="Aesthetic Locations" img={mdPic3} />
            <MediumCards location="Pet Friendly" img={mdPic4} />
          </div>
        </section>

        <div className="relative mt-10">
          <LargeCard
            title="The Most Trusted Holiday Portal"
            description="Fill Wishlists with your favourite locations!"
            img={LgPic}
            button="Get Started"
          />
        </div>
      </main>
    </div>
  );
}

export default Cities;
