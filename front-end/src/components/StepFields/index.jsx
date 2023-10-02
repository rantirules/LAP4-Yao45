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
            <div key={index}>
              <input
                name='step'
                placeholder='Step'
                value={input.step}
                onChange={event => handleSteps(index, event)}
                />
              <button onClick={() => removeFields(index)}>Remove</button>
            </div>
          </>
        )
      })}
      <button onClick={addStepField}>Add More</button>
    </>
  )
}

export default StepFields