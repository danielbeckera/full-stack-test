import styles from "./styles.module.css";
import Image from "next/image";
import cn from "classnames";

import React, { useState } from "react";

const BeerCard = ({ beer }) => {
  const [seeMoreText, setSeeMoreText] = useState(false);

  const handleSeeMoreText = () => {
    setSeeMoreText(!seeMoreText);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <h2 className={styles.beerInformation}>IBU: {beer?.ibu}</h2>
          <h2 className={styles.beerInformation}>ABV: {beer?.abv}%</h2>
        </div>
        <div className={styles.imageContainer}>
          <Image
            alt={beer?.name}
            src={
              beer?.image_url ||
              "https://gothops.blog/wp-content/uploads/2020/08/beer-glass-question-mark.jpg"
            }
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className={styles.cardImage}
          />
        </div>

        <h2 className={styles.beerName}>{beer.name}</h2>
        <div className={styles.testando}>
          <p
            className={cn(
              styles.beerDescription,
              {
                [styles.truncated]: seeMoreText === false,
              },
              { [styles.notTruncated]: seeMoreText },
              {
                [styles.forceTruncate]: seeMoreText === false,
              }
            )}
          >
            {beer.description}
          </p>
          {beer.description.length > 40 && (
            <button
              type="button"
              onClick={handleSeeMoreText}
              className={styles.seeMoreButton}
            >
              {seeMoreText ? `menos` : `mais`}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BeerCard;
