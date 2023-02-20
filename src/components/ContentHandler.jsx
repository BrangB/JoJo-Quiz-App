import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { pastTenseQuestions, randomQuestions } from '../Database/Data'
function ContentHandler() {
  
  const currentContent = useSelector(state => state.currentContent)

  switch(currentContent) {
    case 'presentTense':
      return randomQuestions
    break
    case 'pastTense':
      return pastTenseQuestions
    break
    default:
      return null
  }
}

export default ContentHandler