import React from 'react'

const Steps = ({ steps }) => {

  function displaySteps() {
    if (steps) {
      let list = steps.map((step, index) => {
        return <li key={index}>{step.step}</li>
      })
      return list
    }
  }

  return (
    <>
      <strong>Steps:</strong>
        <ol>
         {displaySteps()}
        </ol>
    </>
  )
}

export default Steps