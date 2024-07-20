import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import { Fragment } from "react";

const page = async (props) => {
  const { id } = props.params;

  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c02fbc68bcmshbcf86db29a2c655p12007cjsn9adea8d51505",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const data = await res.json();
    if (!data || data.length === 0) {
      throw new Error("No data returned from API");
    }

    const main_data = data[0].details;
    if (!main_data) {
      throw new Error("Main data is undefined");
    }

    return (
      <div className={styles.container}>
        <h2 className={styles.movie_title}>
          Netflix \ <span>{main_data.type}</span>
        </h2>
        <div className={styles.card_section}>
          <div className={styles.movie_data}>
            <div className={styles.movie_text}>
              <h1>{main_data.title}</h1>
              <p>{main_data.synopsis}</p>

              {main_data.type === "show" && (
                <Fragment>
                  <p>Season = {main_data.seasonCount}</p>
                  <p>Episode Count = {main_data.episodeCount}</p>
                </Fragment>
              )}
            </div>

            <div>
              {main_data.backgroundImage && main_data.backgroundImage.url ? (
                <Image
                  src={main_data.backgroundImage.url}
                  alt={main_data.title}
                  width={600}
                  height={300}
                  className={styles.bg_image}
                />
              ) : (
                <p>No background image available</p>
              )}
            </div>
          </div>

          <div>
            <h2>Cast Members</h2>
            {main_data.cast && main_data.cast.length > 0 ? (
              <ul>
                {main_data.cast.map((castMember, index) => (
                  <div key={index}>
                    <li>{castMember.name}</li>
                  </div>
                ))}
              </ul>
            ) : (
              <p>No cast information available</p>
            )}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching movie data:", error);
    return (
      <div className={styles.container}>
        <h2>Error</h2>
        <p>There was an error loading the movie data.</p>
      </div>
    );
  }
};

export default page;

export function generateMetadata({ params }) {
  const { id } = params;
  return {
    title: `MovieFlix/movie/${id}`,
  };
}
