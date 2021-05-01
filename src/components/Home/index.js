import { useSelector } from "react-redux";
import Search from "../Search";
import Chart from "react-apexcharts";
import { optionsHome } from "../../helpers/chartOptions";
import {
  getStrongestStat,
  getAvgHeight,
  getAvgWeight,
  getPowerStats,
} from "../../helpers/auxFunctions";

import styles from "./home.module.scss";

import Card from "../Card";
import Navbar from "../Navbar";

const Home = () => {
  const team = useSelector((state) => state.team);

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.header}>
          <Search />
          <div />
        </div>
        <div className={styles.cardDeck}>
          {team && team.length > 0 ? (
            team.map((hero, i) => {
              return <Card hero={hero} key={i} />;
            })
          ) : (
            <h1>You don't have a team yet</h1>
          )}
        </div>
        {team && team.length ? (
          <div className={styles.stats}>
            <div className={styles.averages}>
              <h1>Team stats:</h1>
              <p>
                Strongest Stat:{" "}
                <span>
                  {getStrongestStat(team).charAt(0).toUpperCase() +
                    getStrongestStat(team).slice(1)}
                </span>
              </p>
              <p>
                Average Height: <span>{`${getAvgHeight(team)} cm`}</span>
              </p>
              <p>
                Average Weight: <span>{`${getAvgWeight(team)} kg`}</span>
              </p>
            </div>

            <Chart
              options={optionsHome}
              series={[
                {
                  name: "Score",
                  data: getPowerStats(team),
                },
              ]}
              type="radar"
              width="220"
              height="180"
            />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Home;
