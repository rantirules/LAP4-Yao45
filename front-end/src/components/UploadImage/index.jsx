import React, { useEffect, useRef } from 'react'

const UploadImage = () => {
  const cloudinaryRef = useRef()
  const widgetRef = useRef()
  useEffect(() => {
    cloudinaryRef.current =  window.cloudinary
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: 'dvu7ysgku',
      uploadPreset: 'eda8gcbx'
    }, function(error, result) {
      console.log(result)
    })
  }, [])
  return (
    <button onClick={() => widgetRef.current.open()}>Upload</button>
  )
}

export default UploadImage