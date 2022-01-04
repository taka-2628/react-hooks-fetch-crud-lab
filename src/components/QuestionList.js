import React, { useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onInitialFetch, onDeleteQuestion }) {

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((qs) => onInitialFetch(qs))
  }, [])
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question) => {
        return (
          <QuestionItem 
            key={question.id}
            question={question}
            onDeleteQuestion={onDeleteQuestion}
          />
        )
      })}</ul>
    </section>
  );
}

export default QuestionList;
