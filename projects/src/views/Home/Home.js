import React, { useEffect, useState } from "react";
import { getProjects } from "../../services/api.calls";

const Home = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const projectsFetch = getProjects().then(({ data }) =>
      setProjects([...data.projects])
    );
  }, []);
  console.log(projects);
  return (
    <main>
      <section>
        <h1>Home</h1>
      </section>
    </main>
  );
};

export default Home;
