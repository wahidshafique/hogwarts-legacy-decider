export type QuestionNames =
  | "entry"
  | "controversy"
  | "liveYourLife"
  | "liveYourLifeUsed"
  | "willingToBuyUsed"
  | "dontBuyIt"
  | "donateOffset";

export interface Question {
  /** any name that is significant to our api */
  name: string;
  questionText: string | JSX.Element;
  questionReferences?: string | JSX.Element;
  affirmative: QuestionNames;
  negative: QuestionNames;
  key: string;
}

export interface QuestionTerminus {
  /** any name that is significant to our api */
  name: string;
  questionText: string | JSX.Element;
  questionReferences?: string | JSX.Element;
  terminalText: string | JSX.Element;
  key: string;
}
