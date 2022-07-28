import React, {createContext, useState, useEffect} from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(true)
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

  useEffect(() => {
    fetchFeedback()
  }, [])


  // fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch(`/feddback?_sort=id&_order=desc`)
    const data = await response.json()

    setFeedback(data)
    setIsLoading(false)
  }


   // add feedback
   const addFeedback = async (newFeedback) => {
    const response = await fetch('/feddback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFeedback),
    })

    const data = await response.json()
    setFeedback([data, ...feedback]);
  }

  // delete feedback
  const deleteFeedback = async (id) => {
    if(window.confirm('apa yakin akan di delete?')){
      await fetch(`/feddback/${id}`, { method: 'DELETE' })

      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  // update feedback
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/feddback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updItem),
    })

    const data = await response.json()

    setFeedback(
      feedback.map((item) => (item.id === id ? {...item, ...data } : item))
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
          isLoading,
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