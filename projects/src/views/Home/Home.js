import React, { useEffect, useState } from "react";
import { getProjects } from "../../services/api.calls";
import Project from "../../components/Project/Project";
import { Link, Route } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const projectsFetch = getProjects().then(({ data }) =>
      setProjects([...data.projects])
    );
  }, [projects]);
  return (
    <main>
      <h1>Projects</h1>
      <section className="projects">
        {projects.map((project) => (
          <Project project={project} key={project._id} />
        ))}
      </section>
      <Route>
        <Link to="/new-project">Add project</Link>
      </Route>
    </main>
  );
};

export default Home;
