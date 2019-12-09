import React, { useState, useEffect } from "react";

const AddForm = ({ content, onSubmit }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (content) {
      setValue(content);
    }
  }, [content]);

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(value);
  };

  const handleChange = event => {
    const { value } = event.target;

    setValue(value);
  };

  return (
    <form className="ui reply form">
      <div className="field">
        <textarea onChange={handleChange} value={value}></textarea>
      </div>
      <div
        className="ui blue labeled submit icon button"
        onClick={evt => handleSubmit(evt)}
      >
        <i className="icon edit"></i> Отправить
      </div>
    </form>
  );
};

export default AddForm;
