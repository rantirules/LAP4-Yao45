import React from 'react'

const Steps = ({ steps }) => {

  function displaySteps() {
    if (steps) {
      let list = steps.map((step, index) => {
        return <li key={index}>{step}</li>
      })
      return list
    }
  }

  return (
    <>
      Steps:
        <ol>
         {displaySteps()}
        </ol>
    </>
  )
}

export default Steps