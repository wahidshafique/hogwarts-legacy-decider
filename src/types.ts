export type QuestionNames =
  | "entry"
  | "controversy"
  | "liveYourLife"
  | "liveYourLifeUsed"
  | "willingToBuyUsed"
  | "dontBuyIt"
  | "donateOffset";

export interface Question {
  questionText: string | JSX.Element;
  questionReferences?: string | JSX.Element;
  affirmative: QuestionNames | null;
  negative: QuestionNames | null;
  key: string;
}

export interface QuestionTerminus {
  questionText: string | JSX.Element;
  questionReferences?: string | JSX.Element;
  key: string;
  terminalText?: string | JSX.Element;
}
