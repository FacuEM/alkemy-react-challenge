import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./heroDetails.module.scss";

import Navbar from "../Navbar";

const HeroDetails = () => {
  const history = useHistory();
  const [hero, setHero] = useState("");
  const [error, setError] = useState("");
  let { id } = useParams();
  const api = `http://localhost:8080/hero/${id}`;

  useEffect(() => {
    const fetchHeroDetails = async () => {
      let response = await axios.get(api);
      response.data.response === "success"
        ? setHero(response.data)
        : setError(response.data.error);
    };
    fetchHeroDetails();
  }, []);
  const { image, biography, appearance, name, work } = hero;
  return (
    <>
      <Navbar />

      {error ? (
        <div className={styles.error}>
          Oops, there seems to be an error: <span>{error}</span>
        </div>
      ) : hero ? (
        <div className={styles.container}>
          <div className={styles.left}>
            <img alt="Hero" src={image.url} />
          </div>
          <div className={styles.right}>
            <h1>{name}</h1>
            <p>
              <span>Full name:</span> {biography["full-name"]}
            </p>
            <p>
              <span>Aliases:</span> {biography["aliases"].join(", ")}
            </p>
            <p>
              <span>Work base:</span> {work["base"]}
            </p>
            <p>
              <span>Weight:</span> {appearance["weight"][1]}
            </p>
            <p>
              <span>Height:</span> {appearance["height"][1]}
            </p>
            <p>
              <span>Hair color:</span> {appearance["hair-color"]}
            </p>
            <p>
              <span>Eye color:</span> {appearance["eye-color"]}
            </p>
          </div>
        </div>
      ) : null}

      <button className={styles.back} onClick={() => history.goBack()}>
        Back
      </button>
    </>
  );
};

export default HeroDetails;
