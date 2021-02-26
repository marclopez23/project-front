import React, { useState, useEffect } from "react";
import Form from "../../components/Form/Form";
import { updateProject, getProject } from "../../services/api.calls";
import { useParams } from "react-router-dom";

const Update = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState({});
  useEffect(() => {
    const fetchProject = getProject(projectId).then(({ data }) =>
      setProject({ ...data.project })
    );
  }, [projectId]);

  return (
    <main>
      <h1>Update project</h1>
      <Form call={updateProject} project={project} />
    </main>
  );
};

export default Update;
