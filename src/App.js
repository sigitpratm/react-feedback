import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, {useState} from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './styles/AboutPage';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([...feedback, newFeedback]);
  }

  const deleteFeedback = (id) => {
    if(window.confirm('apa yakin akan di delete?')){
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }


  return (
    <Router>
      <Header />
      <div className="container">
      <Routes>
        <Route exact path="/" element={
        <>
          <FeedbackForm />
          <FeedbackStats />
          <FeedbackList />
        </>
        } />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      </div>
      <AboutIconLink />
    </Router>
  );

  // return (
  // <>
  //   <Header />
  //   <div className="container">
  //     <FeedbackForm handleAdd={addFeedback} />
  //     <FeedbackStats feedback={feedback} />
  //     <FeedbackList feedback={feedback}
  //     handleDelete={deleteFeedback} />
  //     <AboutPage />
  //   </div>
  // </>
  // );


}

export default App;
