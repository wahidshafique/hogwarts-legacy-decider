export type QuestionNames = "entry" | "lifeYourLife";

export interface Question {
  questionText: string;
  questionReferences?: string;
  affirmative: QuestionNames | null;
  negative: QuestionNames | null;
  key: number;
}
