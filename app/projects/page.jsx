"use client"

import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { getProjects } from '@/lib/service';
import React, { useEffect, useState } from 'react';


const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All Work');
    const [projects, setProjects] = useState([]);
  const filters = ['All Work', 'Interface', 'Branding', 'Systems'];
    const loadProjects = async() => {
        const res = await getProjects();
        setProjects(res);
        
    }
    useEffect(() => {
        loadProjects();
    }, [])
  const filteredProjects = activeFilter === 'All Work' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribe clicked');
  };

  return (
    <>

      <main className="p-10 flex flex-col gap-10">
        {/* Hero Title Section */}
        <section className="max-w-2xl flex flex-col gap-10 mt-20">
          <h1 className="text-6xl font-bold text-slate-900 dark:text-slate-100">Selected Works</h1>
          <p className="text-xl text-neutral-900 dark:text-slate-200 mb-10">
            A collection of digital experiences, architectural systems, and utility-driven interfaces designed with precision and quiet confidence.
          </p>
        </section>

        {/* Project Filter Chips */}
        <div className="flex flex-wrap gap-4 mb-10">
          {filters.map((filter) => (
            <span
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 cursor-pointer  font-mono transition-colors ${
                activeFilter === filter
                  ? 'bg-slate-900 text-slate-50'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {filter}
            </span>
          ))}
        </div>

        {/* Projects Grid */}
        <section className="font-sans-serif ">
            <div className=' '>
         <ProjectCard projects={projects} />

            </div>
        </section>

        {/* Newsletter / CTA Section */}
        <section className="flex gap-8 sm:flex-row flex-col items-center justify-between sm:p-20 p-5 border-t border-slate-300 dark:border-slate-500 pt-10 pb-20 my-20 ">
          <div className="max-w-md lex flex-col gap-8">
            <h2 className="font-bold text-4xl text-slate-900 dark:text-slate-100">Stay in the loop.</h2>
            <p className="text-gray-900 text-lg font-light mt-6 dark:text-slate-200">
              Occasional updates on design, utility, and the projects I'm working on. No noise, just signal.
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="w-full md:w-auto flex flex-col sm:flex-row gap-stack-sm items-end sm:items-center  gap-4">
            <div className="w-full sm:w-64 ">
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                className="w-full bg-transparent border-0 border-b border-outline py-2 px-0 focus:ring-0 focus:border-primary transition-colors text-body-md"
                id="email"
                placeholder="Email address"
                type="email"
              />
            </div>
            <button className="bg-slate-900 text-slate-50 px-12 py-2 cursor-pointer " type="submit">
              Subscribe
            </button>
          </form>
        </section>
      </main>

      <Footer/>
    </>
  );
};

export default Projects;