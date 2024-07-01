export interface OptionsComponentProps {
    options: string[];
    handleOptionPress: (option: string) => void;
    selectedAnswer: string | null;
    fiftyFiftyOptions: string[];
    selectedOption: string;
    correctAnswer: string;
  }

  export interface QuestionComponentProps {
    questionNumber: number;
    question: string;
  }

  export interface LifelineComponentProps {
    useLifeline: (lifeline: string) => void;
    usedHint: boolean;
    usedFiftyFifty: boolean;
    usedFlip: boolean;
    selectedAnswer: string | null;
  }