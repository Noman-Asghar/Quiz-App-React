import React, { useState } from 'react';
import './Quiz.css'

function Quizform({ onFormSubmit }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(name);
  };

  return (
    <div className='form'>
    
    <form className='text' onSubmit={handleSubmit}>
     
    <h1>JavaScript <br/> QuizForm</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
          
     
      <button type="submit">Start Quiz</button>
    </form>
  
    </div>
  );
};

export default Quizform;