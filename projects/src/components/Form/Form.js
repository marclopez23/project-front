import React, { useEffect, useState } from "react";
import { getProject } from "../../services/api.calls";
import { Redirect } from "react-router-dom";

const Form = ({ call, project }) => {
  const [formData, setData] = useState({});
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    if (project) {
      setData({ ...project });
    }
  }, [project]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSumbmit = (event) => {
    event.preventDefault();
    const handleCall = project ? call(project._id, formData) : call(formData);
    setRedirect(true);
  };

  return (
    <section>
      {redirect ? <Redirect to="/" /> : null}
      <form action="" onSubmit={handleSumbmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor="description">Description</label>
        <input
          type="textarea"
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
        />
        <input type="submit" value="Save" />
      </form>
    </section>
  );
};

export default Form;
