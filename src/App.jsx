import React, { useState, useEffect } from 'react'

const App = () => {
  const [category, setCategory] = useState('')

  const [difficulty, setDifficulty] = useState('')

  return (
    <div>
      <select
        value={category}
        onChange={(select) => {
          const selectedCategory = select.target.value
          setCategory(selectedCategory)
        }}
      >
        <option value="">--please choose a category--</option>
        <option value="History">History</option>
        <option value="Science">Science</option>
        <option value="Art">Art</option>
        <option value="Computers">Computers</option>
        <option value="Nature">Nature</option>
      </select>
      <select
        value={difficulty}
        onChange={(select) => {
          const selectedDifficulty = select.target.value
          setDifficulty(selectedDifficulty)
        }}
      >
        <option value="">--please choose a difficulty--</option>
        <option value="Easy">Easy</option>
        <option value="Hard">Hard</option>
      </select>
      <p></p>
      <h1>{category} {difficulty}</h1>
      <button name="start">Start Quiz</button>
    </div>
  )
}

export default App
