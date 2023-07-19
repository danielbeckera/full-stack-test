import { parse } from "cookie";
import BeerCard from "../components/BeerCard/BeerCard";
import styles from "../styles/Beers.module.css";
import React, { useEffect, useState, useContext } from "react";
import Pagination from "@mui/material/Pagination";
import { useCookies } from "react-cookie";
import { CircularProgress } from "@mui/material";

const Beers = ({ beers }) => {
  const [beersData, setBeersData] = useState(beers);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const [cookies] = useCookies();

  const fetchBeers = async (page) => {
    const response = await fetch(
      `http://localhost:3001/beers?beersPerPage=80&pageNum=${page}`,
      {
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        },
      }
    );

    return await response.json();
  };

  const getBeers = async (page = 1, beersSelected = []) => {
    const data = await fetchBeers(page);

    if (data.length >= 80) {
      return getBeers(page + 1, [...beersSelected, ...data]);
    }

    return [...beersSelected, ...data];
  };

  useEffect(() => {
    getBeers().then((beers) => {
      setBeersData(beers);
      setLoading(false);
    });
  }, []);

  const totalPages = Math.ceil(beersData.length / 12);

  return (
    <div className={styles.beerWrapper}>
      <h1>Beers List</h1>
      <ul className={styles.beerList}>
        {loading ? (
          <CircularProgress />
        ) : (
          beersData
            ?.slice((page - 1) * 12, (page - 1) * 12 + 12)
            ?.map((beer) => <BeerCard beer={beer} key={beer.id} />)
        )}
      </ul>
      <Pagination
        size="medium"
        count={totalPages}
        color="standard"
        page={page}
        onChange={(e, page) => setPage(page)}
      />
    </div>
  );
};

export async function getServerSideProps(context) {
  try {
    const mycookie = parse(context.req.headers.cookie || ``);

    const { token } = mycookie;

    const response = await fetch("http://localhost:3001/beers", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const beers = await response.json();

    return {
      props: { beers },
    };
  } catch (error) {
    console.error("Error fetching beers:", error);

    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
}

export default Beers;
