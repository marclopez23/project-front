import React from "react";
import { Route, Link } from "react-router-dom";
import { deleteProject } from "../../services/api.calls";

const Project = ({ project }) => {
  const handleDelete = () => {
    deleteProject(project._id);
  };

  return (
    <article>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="buttons">
        <Route>
          <Link to={`/project/${project._id}`} className="btn">
            More info
          </Link>
        </Route>
        <button className="btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </article>
  );
};

export default Project;
