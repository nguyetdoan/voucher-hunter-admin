import axios from "axios";
import React, { useEffect, useState } from "react";

const Upload = ({
  setFieldValue,
  name,
  value,
  isSubmitting,
  touched,
  errors,
  values,
  justShow,
  setJustShow,
}) => {
  const [previewSources, setPreviewSources] = useState([]);
  const [isLoading, setLoading] = useState(0);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    previewFile(file);
  };

  useEffect(() => {
    if (values.images.length && justShow) {
      setPreviewSources(
        values.images.map((url) => ({
          url,
          isSuccess: true,
        }))
      );
      setJustShow(false);
    }
  }, [values, justShow, setJustShow]);

  const previewFile = (file) => {
    setLoading((state) => state + 1);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      uploadImage(reader.result);
    };
  };

  useEffect(() => {
    if (isSubmitting) {
      setPreviewSources([]);
    }
  }, [isSubmitting]);

  const uploadImage = async (base64EncodedImage) => {
    try {
      const response = await axios.post("http://localhost:8080/api/upload", {
        data: base64EncodedImage,
      });

      const url = response.data;
      setPreviewSources((source) => [...source, { url, isSuccess: true }]);
      setFieldValue(name, [...value, url]);
      setLoading((state) => state - 1);
    } catch (err) {
      console.error(err);
      setPreviewSources((source) => [
        ...source,
        { url: base64EncodedImage, isSuccess: false },
      ]);
      setLoading((state) => state - 1);
    }
  };

  const handleDeleteSource = (index, deletedUrl) => {
    setPreviewSources((sources) => {
      const newSources = [...sources];
      newSources.splice(index, 1);
      return newSources;
    });

    const newValue = value.filter((url) => url !== deletedUrl);
    setFieldValue(name, newValue);
  };

  return (
    <>
      <div className="upload-field input-field">
        <label>Upload Image</label>
        <div className="image-preview">
          {previewSources.length > 0 &&
            previewSources.map((source, index) => (
              <div
                className={`image-container ${
                  !source.isSuccess ? "error" : ""
                }`}
              >
                <img src={source.url} alt="chosen" />
                <span
                  className="delete-btn"
                  onClick={() => handleDeleteSource(index, source.url)}
                >
                  X
                </span>
              </div>
            ))}

          {isLoading > 0 &&
            Array.from({ length: isLoading }, () => (
              <div className="loading-img">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ))}
          <input
            id="fileInput"
            type="file"
            name="image"
            onChange={handleFileInputChange}
          />
          {touched[name] && errors[name] ? (
            <div className="err-msg">{errors[name]}</div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Upload;
