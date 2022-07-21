import { v4 as uuidv4 } from 'uuid';
import React, {createContext, useState} from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState([
    {
      id: '1',
      text: 'Feedback ini sangat bagus 1',
      rating: 10
    },

    {
      id: '2',
      text: 'Feedback ini sangat bagus 2',
      rating: 9
    },

    {
      id: '3',
      text: 'Feedback ini sangat bagus 3',
      rating: 8
    }
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

   // add feedback
   const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([...feedback, newFeedback]);
  }

  // delete feedback
  const deleteFeedback = (id) => {
    if(window.confirm('apa yakin akan di delete?')){
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  // update feedback
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? {...item, ...updItem } : item))
    )
  }

  // set item feedback to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }



  return (
      <FeedbackContext.Provider value={{
          feedback,
          feedbackEdit,
          deleteFeedback,
          addFeedback,
          editFeedback,
          updateFeedback
      }}>
          {children}
      </FeedbackContext.Provider>
  )
}

export default FeedbackContext