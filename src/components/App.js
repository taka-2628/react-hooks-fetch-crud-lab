import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  function updateQuestions(qs){
    setQuestions(qs)
  }

  function handleAddQuestion(newQuestion){
    setQuestions([...questions, newQuestion])
  }

  function handleDeleteQuestion(deletedQuestion){
    const updataedItems = questions.filter((question) => (question.id !== deletedQuestion.id));
    setQuestions(updataedItems);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={handleAddQuestion} /> : <QuestionList questions={questions} onInitialFetch={updateQuestions} onDeleteQuestion={handleDeleteQuestion}/>}
    </main>
  );
}

export default App;
