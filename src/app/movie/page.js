import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.css";
const page = async () => {

  await new Promise(resolve => setTimeout(resolve, 1200));

  const url = process.env.MOVIE_KEY;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "7bb41d6487mshb004e21f308cbcep11f4cajsn9dba2917c336",
      "x-rapidapi-host": "netflix54.p.rapidapi.com",
    },
  };
  const response = await fetch(url, options);
  const data = await response.json();
  const movieData = await data.titles;
  // console.log(movieData);

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series and Movies</h1>
          <div className={styles.card_section}>

          {movieData.map((elem) => {
            return <MovieCard key={elem.id} {...elem} />;
          })}
        </div>
        </div>

      </section>
    </>
  );
};

export default page;


export function generateMetadata(){
  return{
    title:"MovieFlix/movie"
  }
}