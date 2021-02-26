import React from "react";
import Form from "../../components/Form/Form";
import { createProject } from "../../services/api.calls";

const Add = () => {
  return (
    <main>
      <h1>Add new project</h1>
      <Form call={createProject} />
    </main>
  );
};

export default Add;
