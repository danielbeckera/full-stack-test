import { parse } from "cookie";

const Beers = ({ beers }) => {
  return (
    <div>
      <h1>BeerList</h1>
      <ul>
        {beers?.map((beer) => (
          <li key={beer.id}>{beer.name}</li>
        ))}
      </ul>
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
