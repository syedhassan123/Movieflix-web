import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import { Fragment } from "react";
const page = async (props) => {
  const id = props.params.id;

  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c02fbc68bcmshbcf86db29a2c655p12007cjsn9adea8d51505",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data[0].details;

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.movie_title}>
          Netflix \ <span> {main_data.type} </span>
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
            <Image
              src={main_data.backgroundImage.url}
              alt={main_data.title}
              width={600}
              height={300}
              className={styles.bg_image}
            />
          </div>

         
          </div>
         
          <div>
          
          

            <h2>Cast Members</h2>
            <ul>
              {main_data.cast.map((castMember, index) => (
                <div key={index}>
                  <li>{castMember.name}</li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

export function generateMetadata({ params }) {
  const id = params.id;
  return {
    title: "MovieFlix/movie/" + id + "",
  };
}
