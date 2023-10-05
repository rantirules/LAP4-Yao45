import React from 'react'

const StepFields = ({steps, setSteps}) => {
  function handleSteps(index, event) {
    let data = [...steps]
    data[index][event.target.name] = event.target.value
    setSteps(data)
  }

  function addStepField() {
    let newField = { step: '' }
    setSteps([...steps, newField])
  }

  function removeFields(index) {
    let data = [...steps]
    data.splice(index, 1)
    setSteps(data)
  }
  return (
    <>
      <p>Steps:</p>
      {steps.map((input, index) => {
        return (
          <>
            <div key={index} className = "step-container">
              <input
                name='step'
                placeholder='Step'
                value={input.step}
                onChange={event => handleSteps(index, event)}
                className = "form-input"
                id='step-input'
                />
              <button onClick={() => removeFields(index)} className = "remove-btn">Remove</button>
            </div>
          </>
        )
      })}
      <button onClick={addStepField} className ="add-btn">Add More</button>
    </>
  )
}

export default StepFields
