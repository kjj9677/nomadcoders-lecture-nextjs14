import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

const getMovies = async () => {
  const response = await fetch(URL);
  const json = await response.json();
  return json;
};

export default async function HomePage() {
  const movies = await getMovies();
  return <h1>{movies.length}</h1>;
}
