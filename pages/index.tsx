import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { ICardData, IExploreItem, ILargeCardData } from "../type";
import { cardData, exploreData, LargeCardData } from "../constants";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

export interface HomeProps {
  exploreData: IExploreItem[];
  cardData: ICardData[];
  LargeCardData: ILargeCardData;
}

export default function Home({
  exploreData,
  cardData,
  LargeCardData,
}: HomeProps) {
  return (
    <div>
      <Head>
        <title>Next Airbnb</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item, i) => (
              <SmallCard key={i} {...item} />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardData?.map((item, i) => (
              <MediumCard key={i} {...item} />
            ))}
          </div>
        </section>
        <LargeCard {...LargeCardData} />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  // To avoid network latency
  return {
    props: {
      exploreData,
      cardData,
      LargeCardData,
    },
  };
}
