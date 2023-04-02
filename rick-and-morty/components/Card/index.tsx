import React from "react";
import { Inter } from "next/font/google";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });
const Card = () => (
  <div className={styles.grid}>
    <Link className={styles.card} href={"/characterList"}>
      <h2 className={inter.className}>
        Personagens <span>-&gt;</span>
      </h2>
      <p className={inter.className}>
        Veja a lista de todos os personagens de Rick and morty
      </p>
    </Link>
  </div>
);

export { Card };
