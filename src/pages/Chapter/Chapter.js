import React, { useContext } from "react";
import styles from "./Chapter.module.scss";
import { useParams } from "react-router";
import { Grid } from "@material-ui/core";
import { GlobalContext } from "../../utils/contexts/GlobalContext";
import { Card } from "../../components";
import { investmentOptions } from "../../utils/constants";
import { motion } from "framer-motion";

const numberFormat = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(value);

const Chapter = () => {
  const { id } = useParams();

  const { initialAmount, chapters, setChapters } = useContext(GlobalContext);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>Where would you like to invest?</p>
        <div className={styles.initialBalance}>
          <p>Current Balance</p>
          <h5>{numberFormat(initialAmount)}</h5>
        </div>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.main}>
          <Grid container spacing={4}>
            {investmentOptions.map((option) => (
              <Grid item xl={3} lg={4} md={6} sm={12} xs={12}>
                <motion.div>
                  <Card
                    title={option.title}
                    risk={option.risk}
                    returnRate={option.return}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </div>
        <div className={styles.progress}></div>
      </div>
    </div>
  );
};

export default Chapter;