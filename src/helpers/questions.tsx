import { Question, QuestionNames } from "@/types";

const questions: {
  [key in QuestionNames]: Question;
} = {
  entry: {
    key: 1,
    questionText: (
      <span>
        Do you care about the controversy<sup>[1]</sup> surrounding this game?
      </span>
    ),
    questionReferences: (
      <a href="https://www.forbes.com/sites/conormurray/2023/02/07/hogwarts-legacy-video-game-controversy-boycotts-and-jk-rowlings-comments-on-transgender-community-explained/?sh=d64c6951c4bb">
        [1] "Hogwarts Legacy" Video Game Controversy
      </a>
    ),
    affirmative: "lifeYourLife",
    negative: "lifeYourLife",
  },
  lifeYourLife: {
    key: 2,
    questionText: "bossop",
    affirmative: null,
    negative: null,
  },
};

export default questions;
