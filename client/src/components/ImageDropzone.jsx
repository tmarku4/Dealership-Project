import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

function ImageDropzone() {
    const [images, setImages] = useState([])
    const [errorFiles, setErrorFiles] = useState([])
    const [filesToUpload, setFilesToUpload] = useState([])

    const handleImageUpload = async () => {
      const uploadPromises = filesToUpload.map(async (file) => {
        const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", "q3d5u7hz");
      
          try {
            const response = await fetch(
              "https://api.cloudinary.com/v1_1/dq0gpy4yy",
              {
                method: "POST",
                body: formData,
              }
            );
      
            const data = await response.json();
            return { ...file, preview: data.secure_url };
          } catch (error) {
            console.error("Error uploading image: ", error);
            return null;
          }
      });
      Promise.all(uploadPromises).then((uploadedImages) => {
        // Filter out null values (failed uploads) and update state with successful uploads
        const successfulUploads = uploadedImages.filter((image) => image !== null);
        setImages((prevImages) => [...prevImages, ...successfulUploads]);
      });
    };
      

    const onDrop = useCallback(
      async (acceptedFiles, rejectedFiles) => {
        const remainingSlots = 5 - images.length;
        const filesToAdd = acceptedFiles.slice(0, remainingSlots);
  
        handleImageUpload(filesToAdd);

      setErrorFiles(rejectedFiles);
      },
      [images, handleImageUpload]
    );

    const removeImage = (name) => {
      setImages((prevImages) => prevImages.filter(img => img.name !== name))
    }

    const removeError = (name) => {
      setErrorFiles((prevErrorFiles) => prevErrorFiles.filter(file => file.file.name !== name))
    }

    const addedImages = images.map((img, index) => {
      return (
          <div key={index}>
            <img
            src={img.preview}
            alt={img.name}
            width={100}
            height={100} />
            <button type="button" onClick={() => removeImage(img.name)}>
              X
            </button>
          </div>
      )
    })

    const erroredFiles = errorFiles.map(({file, errors}) => {
      return (
        <div key={file.name}>
          <h5>{file.name}</h5>
          <div>
            {errors.map(error => {
              return <p key={error.code}>{error.message}</p>
            })}
          </div>
          <button type="button" onClick={() => removeError(file.name)}>
            X
          </button>
        </div>
      )
    })

    console.log(images)

    const {getRootProps, getInputProps, isDragActive} = useDropzone({ 
      onDrop, 
      accept:{
      'image/jpeg': [],
      'image/png': []
      },
      maxSize: 2048 * 1024,
      maxFiles: 5
    })

    return (
      <>
        <div {...getRootProps()} style={{border: "1pt dashed black"}}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <>
              <p>Drop Images Here</p>
              <p>(Total of 5 Images)</p>
            </>
          ) : (
          <>
            <p>Click Here or Drag Images to Upload</p>
            <p>(Total of 5 Images)</p>
          </>
          )}
        </div>
        <div>
          <h4>Images</h4>
          {addedImages}
        </div>
        <div>
          {(errorFiles.length > 0) ? (
            <h4>Errors</h4>
          ) : (<></>)
          }
          {erroredFiles}
        </div>
      </>
    )
}

export default ImageDropzone