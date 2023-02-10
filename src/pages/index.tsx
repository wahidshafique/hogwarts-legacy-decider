import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import SliderDecider from "@/components/SliderDecider";
import questions from "@/helpers/questions";
import { motion, AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(questions.entry);
  return (
    <>
      <Head>
        <title>Hogwarts Legacy Decider</title>
        <meta
          name="description"
          content="Wanna buy the game but can't decide, use this tool!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/hogwartslegacylogo.png"
          alt="Hogwarts Legacy Logo"
          width={192}
          height={75}
          priority
        />
        {/* <p className={styles.subtitle}>Decider</p> */}
      </div>
      <main className={styles.main}>
        <h1>{currentQuestion.questionText}</h1>
        <AnimatePresence>
          <div>
            <motion.div
              key={currentQuestion.key}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
            >
              <SliderDecider
                onFullSlide={(hasAnsweredAffirmative) => {
                  console.log(hasAnsweredAffirmative);
                  if (hasAnsweredAffirmative) {
                    setCurrentQuestion(questions[currentQuestion.affirmative]);
                  } else {
                    setCurrentQuestion(questions[currentQuestion.negative]);
                  }
                }}
              />
              <p className={styles.helperText}>
                Drag right for Yes, left for No.
              </p>
            </motion.div>
          </div>
        </AnimatePresence>
      </main>
      <footer className={styles.footer}>
        <p className={styles.helperText}>
          {currentQuestion.questionReferences}
        </p>
      </footer>
    </>
  );
}
