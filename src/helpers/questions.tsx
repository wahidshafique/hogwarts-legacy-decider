import { Question, QuestionNames, QuestionTerminus } from "@/types";

// could collide due to birthday paradox but...eh
const randKey = () => (Math.random() + 1).toString(36).substring(7);

const questions: {
  [key in QuestionNames]: Question | QuestionTerminus;
} = {
  entry: {
    key: randKey(),
    questionText: "Do you want this game?",
    affirmative: "controversy",
    negative: "dontBuyIt",
  },
  controversy: {
    key: randKey(),
    questionText: (
      <span>
        Do you care about the controversy<sup>[1]</sup> surrounding this game?
      </span>
    ),
    questionReferences: (
      <a
        target="_blank"
        href="https://www.forbes.com/sites/conormurray/2023/02/07/hogwarts-legacy-video-game-controversy-boycotts-and-jk-rowlings-comments-on-transgender-community-explained/?sh=d64c6951c4bb"
        rel="noreferrer"
      >
        [1] "Hogwarts Legacy" Video Game Controversy
      </a>
    ),
    affirmative: "willingToBuyUsed",
    negative: "liveYourLife",
  },
  dontBuyIt: {
    key: randKey(),
    questionText: "Then do not buy this game",
    affirmative: null,
    negative: null,
    terminalText: (
      <span role="img" aria-label="thumb down emoji">
        👎
      </span>
    ),
  },
  liveYourLife: {
    key: randKey(),
    questionText: "Live your life, buy the game!",
    affirmative: null,
    negative: null,
    terminalText: (
      <span role="img" aria-label="thumb up emoji">
        👍
      </span>
    ),
  },
  liveYourLifeUsed: {
    key: randKey(),
    questionText: (
      <span>
        Live your life, buy the game used or borrow from your local library!
        <sup>[1]</sup>
      </span>
    ),
    questionReferences: (
      <span>
        [1] The purchase that enriched Rowling was already made, you did not
        contribute to it
      </span>
    ),
    terminalText: (
      <span role="img" aria-label="thumb up emoji with recycle">
        👍 ♻️
      </span>
    ),
  },
  willingToBuyUsed: {
    key: randKey(),
    questionText: "Are you willing to buy it used?",
    affirmative: "liveYourLifeUsed",
    negative: "donateOffset",
  },
  donateOffset: {
    key: randKey(),
    questionText: (
      <span>
        To offset the purchase<sup>[1]</sup>, consider donating to
      </span>
    ),
    questionReferences: (
      <span>
        [1] Check how much the game is in your local currency{" "}
        <a
          href="https://gg.deals/game/hogwarts-legacy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
      </span>
    ),
    terminalText: (
      <div
        style={{
          fontSize: "32px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <a
          href="https://translifeline.org/donate/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <img width={100} src="/tll-logo.png" />
          </div>
          Trans Lifeline
        </a>
        <a
          href="https://marshap.org/donate/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            style={{
              backgroundColor: "black",
              width: 100,
              margin: "0 auto",
              marginTop: "2rem",
            }}
          >
            <img width={100} src="/mpji-logo.png" />
          </div>
          Marsha P. Johnson Institute
        </a>
      </div>
    ),
  },
};

export default questions;
