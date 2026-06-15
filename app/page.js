"use client"
import React, { useEffect, useState } from 'react';
import Nav from '@/components/Nav';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { getProjects } from '@/lib/service';
import { ChevronRight } from 'lucide-react';

const Homepage = () => {
  const [projects, setProjects] = useState([]);
    const loadProjects = async() => {
          const res = await getProjects();
          setProjects(res.slice(-3));
          
      }
      useEffect(() => {
          loadProjects();
      }, [])
   

  return (
    <>
      <main className='p-8'>
        {/* Hero Section */}
        <section className="max-w-container-max mx-auto flex flex-col md:flex-row items-center gap-4">
          <div className="flex-1 gap-4 px-5 text-center sm:text-left sm:p-10 mt-20">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em]">Software Engineer</span>
            <h1 className="font-bold my-10 text-7xl sm:text-7xl  text-center md:text-left">
              Creating utility through invisible design.
            </h1>
            <p className="font-light text-lg max-w-4xl">
              I build thoughtful digital experiences that prioritize clarity and function over decoration. Currently shaping the future of tools for creative professionals.
            </p>
            <div className="flex justify-center md:justify-end my-10">
              <Link href={'/projects'} className="bg-slate-800 px-10 py-2 text-white font-mono hover:bg-slate-700 transition-all flex items-center gap-2 ">
                View Projects
                <ChevronRight/>
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="aspect-square bg-slate-100 overflow-hidden group">
              <Image
                alt="Daniel's Workspace"
                className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                src="/landing image.jpg"
                width={1000}
                height={1000}
                unoptimized
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l border-b border-outline-variant hidden md:block"></div>
          </div>
        </section>

        {/* Brief Intro / Philosophy */}
        <section className="mt-8  ">
          <div className="  mx-auto p-4 sm:p-20  bg-slate-100 ">
            <div className="grid grid-cols-1 md:grid-cols-4 ">
              <div className="md:col-span-1">
                <h2 className=" text-slate-800 sticky top-24 font-bold text-2xl">Brief.</h2>
              </div>
              <div className="md:col-span-3  flex flex-col gap-8 p-4 font-light tracking-light">
                <p className=" text-slate-900 ">
                 I’m a product and design systems expert who turns complex processes into simple, intuitive interfaces. My work focuses on clarity and impact, helping teams build products that feel both powerful and effortless to use. 
                </p>
                <p className=" text-gray-600">
                  I help teams ship better products by creating clear design systems, refining user experiences, and ensuring design and development work seamlessly together. My goal is to make complex workflows feel simple and intuitive. 
                </p>
                <div className=" grid grid-cols-2 md:grid-cols-3 gap-8 text-gray-600 ">
                  <div className='flex flex-col gap-4'>
                    <span className="block border-b border-slate-400  pb-2">Core Skills</span>
                    <ul className="space-y-2">
                      <li>Frontend systems architecture and components design</li>
                      <li>Responsive UI development and performance optimisation</li>
                      <li>API integration and frontend-backend coupling</li>
                      <li>Full-stack application development</li>
                      <li>System and workflow design</li>

                    </ul>
                  </div>
                  <div className='flex flex-col gap-4'>
                    <span className="w-full  border-b border-slate-400 inline-block pb-2">Focus</span>
                    <ul className="space-y-2">
                      <li>React/Next.js</li>
                      <li>Node.js/Express</li>
                      <li>TypeScript</li>
                      <li>PostgreSQL/MongoDB</li>
                      <li>RESTful APIs</li>
                      <li>System Design & DevOps</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Tease / Grid */}
        <section className="my-32  ">
          <div className="flex flex-col gap-6 mb-8 md:flex-row justify-between items-end">
            <div className="max-w-md flex flex-col gap-4">
              <h2 className="font-bold text-6xl">Selected Work</h2>
              <p className="text-2xl text-left  ">A curated collection of projects exploring systematic design and interaction.</p>
            </div>
            <div className="hidden md:block">
              <span className="font-label-sm text-label-sm text-slate-950">01 / 0{projects.length}</span>
            </div>
          </div>

          {/* Bento-style grid */}
          <div className="items-center justify-center ">
            {/* Large Card */}
            <ProjectCard projects={projects}/>
        </div>
        </section>

        {/* CTA Section */}
        <section className=" max-w-container-max mx-auto px-margin-mobile md:px-gutter py-stack-lg my-28 ">
          <div className="flex flex-col md:flex-row items-center justify-between gap-stack-lg">
            <h2 className="font-bold text-6xl max-w-[12ch] text-center md:text-left">Let's build something intentional.</h2>
            <a className="group flex items-center gap-stack-sm text-2xl font-bold  hover:text-secondary transition-colors" href="mailto:hello@alexd.design">
              Start a conversation
            </a>
          </div>
        </section>
      </main>
      <Footer/>

   
    </>
  );
};

export default Homepage;