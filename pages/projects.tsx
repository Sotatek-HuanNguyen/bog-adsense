import type { NextPage } from "next";
import Header from "../components/Header";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Projects: NextPage = () => {
  return (
    <div className="h-screen w-full">
      <Header />
      <section className="py-20 px-5 md:px-10">
        <div className="flex flex-col w-full max-w-7xl m-auto space-y-5">
          <h1 className="text-4xl font-bold text-gray-900">Projects</h1>
          <p className="text-lg">
            These are a collection of code snippets I have used in the past and
            saved. Some are Serverless Functions, which include set up
            instructions. Others are anything from random CSS snippets to
            Node.js scripts.
          </p>
          <div className="flex flex-col w-full mt-10">
            <div className="grid md:grid-cols-2 gap-5 grid-cols-1">
              {projects.map((project) => (
                <ProjectCard project={project} key={project.name} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;