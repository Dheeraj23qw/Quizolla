import { MaterialIcons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { StatusBar, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { SafeAreaView } from "react-native-safe-area-context";
import QuizSider from "@/components/Sidebars/QuizSider";
import { questions } from "@/constants/question";
import { styles } from "./QuizscreenCss";
import { useRouter } from "expo-router";

interface QuizScreenProps {}

const QuizScreen: React.FC<QuizScreenProps> = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [flippedQuestionIndex, setFlippedQuestionIndex] = useState<number | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [usedHint, setUsedHint] = useState<boolean>(false);
  const [usedFiftyFifty, setUsedFiftyFifty] = useState<boolean>(false);
  const [usedFlip, setUsedFlip] = useState<boolean>(false);
  const [hint, setHint] = useState<string | null>(null);
  const [fiftyFiftyOptions, setFiftyFiftyOptions] = useState<string[]>([]);
  const [skippedQuestions, setSkippedQuestions] = useState<number[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0); // Track correct answers

  // Limiting questions to 5
  const limitedQuestions = questions.slice(0, 5);

  const currentQuestion = flippedQuestionIndex !== null ? limitedQuestions[flippedQuestionIndex] : limitedQuestions[currentQuestionIndex];
  const { question, options, correctAnswer, hint: questionHint } = currentQuestion;

  const checkAnswer = (answer: string): boolean => {
    return answer === correctAnswer;
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const useLifeline = (lifeline: string) => {
    if (lifeline === "Hint" && !usedHint) {
      setUsedHint(true);
      setHint(questionHint);
    } else if (lifeline === "50-50" && !usedFiftyFifty) {
      setUsedFiftyFifty(true);
      const incorrectOptions = options.filter(option => option !== correctAnswer);
      const randomOptions = incorrectOptions.sort(() => 0.5 - Math.random()).slice(0, 2);
      setFiftyFiftyOptions(randomOptions);
    } else if (lifeline === "Flip" && !usedFlip) {
      setUsedFlip(true);
      setSelectedAnswer(null);
      setHint(null);
      setFiftyFiftyOptions([]);
      flipQuestion();
    }
  };

  const flipQuestion = () => {
    let newQuestionIndex;
    do {
      newQuestionIndex = Math.floor(Math.random() * limitedQuestions.length);
    } while (newQuestionIndex === currentQuestionIndex || skippedQuestions.includes(newQuestionIndex));
    setFlippedQuestionIndex(newQuestionIndex);
  };

  const handleOptionPress = (option: string) => {
    if (!selectedAnswer) {
      setSelectedAnswer(option);
      if (checkAnswer(option)) {
        setTimeout(() => {
          moveToNextQuestion();
          setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % limitedQuestions.length);
          if (currentQuestionIndex  === limitedQuestions.length - 1) {
            // Navigate to winner screen after answering all questions correctly
            router.push("/winner");
          }
        }, 1000);
        setCorrectAnswers(prev => prev + 1); // Increment correct answer count
      }
      else {
        setTimeout(() => {
          // Navigate to result screen on quiz loss
          router.push("/looser");
        }, 1000);
      }
    }
  };

  const router = useRouter();

  const moveToNextQuestion = () => {
    if (flippedQuestionIndex !== null) {
      setSkippedQuestions([...skippedQuestions, flippedQuestionIndex]);
    }
    setSelectedAnswer(null);
    setHint(null);
    setFiftyFiftyOptions([]);
    setFlippedQuestionIndex(null);
  };

  const renderOptions = () => {
    return options.map((option, index) => (
      <TouchableOpacity
        key={index}
        style={[
          styles.option,
          selectedAnswer === option && checkAnswer(option)
            ? styles.correctOption
            : selectedAnswer === option && !checkAnswer(option)
            ? styles.wrongOption
            : null,
        ]}
        onPress={() => handleOptionPress(option)}
        disabled={!!selectedAnswer}
      >
        <Text
          style={[
            styles.optionLabel,
            selectedAnswer === option ? styles.selectedText : null,
          ]}
        >
          {String.fromCharCode(65 + index) + ".  "}
        </Text>
        <Text
          style={[
            styles.optionText,
            selectedAnswer === option ? styles.selectedText : null,
            fiftyFiftyOptions.includes(option) ? styles.redText : null,
          ]}
        >
          {option}
        </Text>
      </TouchableOpacity>
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#BEA1FE" barStyle="dark-content" />
      {sidebarOpen && <QuizSider />}

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <View style={styles.header}>
            <TouchableOpacity onPress={toggleSidebar}>
              <MaterialIcons
                name="menu"
                size={responsiveFontSize(3.5)}
                color="black"
              />
            </TouchableOpacity>
            <Text style={styles.headerText}>Quiz</Text>
            <Text style={styles.timer}>10:00</Text>
          </View>

          <View style={styles.questionContainer}>
            <Text style={styles.questionNumber}>Question {currentQuestionIndex + 1}</Text>
            <Text style={styles.questionText}>{question}</Text>
          </View>

          <View style={styles.optionsContainer}>
            {renderOptions()}
          </View>

          <View style={styles.lifelineContainer}>
            {["Hint", "50-50", "Flip"].map((lifeline, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.lifeline,
                  (lifeline === "Hint" && usedHint) ||
                  (lifeline === "50-50" && usedFiftyFifty) ||
                  (lifeline === "Flip" && usedFlip)
                    ? styles.disabledLifeline
                    : null,
                ]}
                onPress={() => useLifeline(lifeline)}
                disabled={(lifeline === "Hint" && usedHint) ||
                  (lifeline === "50-50" && usedFiftyFifty) ||
                  (lifeline === "Flip" && usedFlip) ||
                  !!selectedAnswer}
              >
                <Text style={styles.lifelineText}>{lifeline}</Text>
              </TouchableOpacity>
            ))}
          </View>
          {hint && (
            <View style={styles.msgContainer}>
              <Text style={styles.hintText}>{hint}</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default QuizScreen;
