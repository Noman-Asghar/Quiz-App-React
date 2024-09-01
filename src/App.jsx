import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Quiz from './Quiz Form/Quiz'
import QuizForm from './Quiz Form/Quizform'
import Quizform from './Quiz Form/Quizform'

function App() {

  const [username, setUsername] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (name) => {
    setUsername(name);
    setIsSubmitted(true);
  }
  return (
    <div className="App">
      {!isSubmitted ? (
        <Quizform onFormSubmit={handleFormSubmit} />
      ) : (
        <Quiz username={username} />
      )}
    </div>
  );
}


export default App
