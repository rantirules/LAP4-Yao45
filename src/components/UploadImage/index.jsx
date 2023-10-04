import React, { useEffect, useRef } from 'react'

const UploadImage = ({image, setImage}) => {
  const cloudinaryRef = useRef()
  const widgetRef = useRef()
  useEffect(() => {
    cloudinaryRef.current =  window.cloudinary
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: 'dvu7ysgku',
      uploadPreset: 'eda8gcbx',
      multiple: false,
      folder: 'cucina',
      resourceType: 'image'
    }, function(error, result) {
      console.log(result)
      if (result.event === 'success') {
        setImage(result.info.public_id)
      }
    })
  }, [])
  return (
    <button onClick={() => widgetRef.current.open()} className = "add-btn">Upload</button>
  )
}

export default UploadImage