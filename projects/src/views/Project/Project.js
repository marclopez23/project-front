import React, { useState, useEffect } from "react";
import { useParams, Redirect, Route, Link } from "react-router-dom";
import { getProject, deleteProject } from "../../services/api.calls";
import "./project.css";

const Project = () => {
  const { projectId } = useParams();
  const [redirect, setRedirect] = useState(false);
  const [project, setProject] = useState({});
  const handleDelete = () => {
    deleteProject(project._id);
    setRedirect(true);
  };

  useEffect(() => {
    const fetchProject = getProject(projectId).then(({ data }) =>
      setProject({ ...data.project })
    );
  }, [projectId]);

  return (
    <main>
      {redirect ? <Redirect to="/" /> : null}
      <h1>{project.title}</h1>
      <section className="project">
        <article>
          <p>{project.description}</p>
        </article>
        <p className="btn" onClick={handleDelete}>
          Delete{" "}
        </p>
        <Route>
          <Link to={`/update-project/${project._id}`} className="btn">
            {" "}
            Update{" "}
          </Link>
        </Route>
      </section>
    </main>
  );
};

export default Project;
