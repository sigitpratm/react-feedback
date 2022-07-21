import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './styles/AboutPage';
import {FeedbackProvider} from './context/FeedbackContext';

function App() {

  return (
    <FeedbackProvider>
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
        <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
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
