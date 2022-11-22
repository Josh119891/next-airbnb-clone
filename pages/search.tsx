import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import { serverProps } from "../constants";
import { ISearchData } from "../type";
import { getDateString } from "../utils/date";

type SearchProps = {
  searchResult: ISearchData[];
};

const Search: React.FC<SearchProps> = ({ searchResult }) => {
  const router = useRouter();
  const { location, startDate, endDate, numOfGuests } = router.query;
  const range = `${getDateString(startDate)} - ${getDateString(endDate)}`;
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${numOfGuests} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays {range} - for {numOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6 ">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="chip">Cancellation Flexibility</p>
            <p className="chip">Type of Place</p>
            <p className="chip">Price</p>
            <p className="chip">Rooms and Beds</p>
            <p className="chip">More filters</p>
          </div>

          {searchResult?.map((item) => (
            <InfoCard key={item.img} {...item} />
          ))}
        </section>
        <section></section>
      </main>

      <Footer />
    </div>
  );
};
export default Search;

export async function getServerSideProps() {
  //TODO: will use my backend data later
  const searchResult: ISearchData[] = serverProps;
  return {
    props: {
      searchResult,
    },
  };
}
