const getBrewdogBeers = async (pageNum = 1, beersPerPage = 10) => {
  const url = `https://api.punkapi.com/v2/beers?page=${pageNum}&per_page=${beersPerPage}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error fetching data.");
    }
    const data = await response.json();
    return data;
  } catch {
    throw new Error("Error fetching data.");
  }
};

module.exports = getBrewdogBeers;
