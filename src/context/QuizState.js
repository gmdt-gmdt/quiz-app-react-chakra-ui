import QuizContext from './quizContext';
import { useEffect, useMemo, useState } from 'react';

const QuizState = props => {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState({ rightAnswers: 0, wrongAnswers: 0 });
  const [next, setNext] = useState(0);
  // const demoURL = 'https://opentdb.com/api.php?amount=4&category=&difficulty=&type=boolean'
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const len = questions.length;
  const [answerList, setAnswerList] = useState([]);

  const fetchQuestions = async apiUrl => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const {results} = data;
      setQuestions(results);
      setLoading(false);
    } catch (error) {
      //console.error('❌ 🔴', error);
    }
  };

  useEffect(() => {
    fetchQuestions(url);
  }, [url]);

  const valueObj = useMemo(
    () => ({
      answerList,
      setAnswerList,
      len,
      questions,
      setQuestions,
      url,
      setUrl,
      fetchQuestions,
      loading,
      setLoading,
      score,
      setScore,
      next,
      setNext,
    }),
    [
      answerList,
      setAnswerList,
      len,
      questions,
      setQuestions,
      url,
      setUrl,
      loading,
      setLoading,
      score,
      setScore,
      next,
      setNext,
    ]
  );

  return (
    <QuizContext.Provider value={valueObj}>
      {props.children}
    </QuizContext.Provider>
  );
};

export default QuizState;
