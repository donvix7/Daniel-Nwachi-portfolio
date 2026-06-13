"use client"
import React, { useEffect, useState } from 'react';
import Nav from '@/components/Nav';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { getProjects } from '@/lib/service';

const Homepage = () => {
  const [projects, setProjects] = useState([]);
    const loadProjects = async() => {
          const res = await getProjects();
          setProjects(res.slice(-3));
          
      }
      useEffect(() => {
          loadProjects();
      }, [])
  useEffect(() => {
    // Micro-interactions and subtle scroll reveal
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, observerOptions);

    // Targets for reveal
    const revealTargets = document.querySelectorAll('section, .group');
    revealTargets.forEach(target => {
      target.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-8');
      observer.observe(target);
    });

    // Smooth scroll anchor links
    const handleAnchorClick = (e) => {
      const anchor = e.currentTarget;
      const href = anchor.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    // Cleanup
    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <>



      <main className='p-8'>
        {/* Hero Section */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter pt-stack-lg md:pt-section-gap flex flex-col md:flex-row items-center gap-4">
          <div className="flex-1 gap-4 p-10">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em]">Product Designer</span>
            <h1 className="font-bold text-7xl my-12">
              Creating utility through invisible design.
            </h1>
            <p className="font-sans text-lg max-w-4xl">
              I build thoughtful digital experiences that prioritize clarity and function over decoration. Currently shaping the future of tools for creative professionals.
            </p>
            <div className="flex justify-end mt-4">
              <Link href={'/projects'} className="bg-slate-800 px-16 py-4 text-white font-monospace-label-sm  hover:bg-slate-700 transition-all flex items-center gap-2 group">
                View Projects
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="aspect-square bg-slate-100 overflow-hidden group">
              <Image
                alt="Alex D. Workspace"
                className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                src="/images/image1.jpeg"
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
          <div className="max-w-container-max mx-auto p-20  bg-slate-100 ">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
              <div className="md:col-span-4">
                <h2 className="font-headline-md text-headline-md text-slate-800 sticky top-24 font-bold text-2xl">Brief.</h2>
              </div>
              <div className="md:col-span-8  flex flex-col gap-8 p-4 font-light tracking-[0.1em]">
                <p className="font-body-lg text-body-lg text-slate-950 leading-relaxed ">
                  Based in Lagos, I specialize in design systems and interface engineering. My approach is rooted in the belief that the best user interface is one that feels inevitable where every interaction serves a purpose and complexity is managed with discipline.
                </p>
                <p className="font-body-md text-body-md text-gray-600">
                  Over the last six years, I've collaborated with startups and established enterprises to translate complex technical requirements into intuitive user journeys. I focus on the intersection of human behavior and systematic scalability.
                </p>
                <div className="pt-8 grid grid-cols-2 text md:grid-cols-3 gap-8 text-gray-600 ">
                  <div className='flex flex-col gap-4'>
                    <span className="block w-full border-b border-slate-400 font-monospace text-label-sm pb-2">Core Skills</span>
                    <ul className="font-caption text-caption text-secondary space-y-2">
                      <li>UI/UX Engineering</li>
                      <li>Design Systems</li>
                      <li>Prototypes &amp; Motion</li>
                    </ul>
                  </div>
                  <div className='flex flex-col gap-4'>
                    <span className="font-monospace w-full text-label-sm border-b border-slate-400 inline-block pb-2">Focus</span>
                    <ul className="font-caption text-caption text-secondary space-y-2">
                      <li>SaaS Tools</li>
                      <li>Fintech Platforms</li>
                      <li>Internal Tooling</li>
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
              <h2 className="font-bold text-3xl text-slate-800">Selected Work</h2>
              <p className="font-body-md text-body-md text-slate-600">A curated collection of projects exploring systematic design and interaction.</p>
            </div>
            <div className="hidden md:block">
              <span className="font-label-sm text-label-sm text-slate-950">01 / 04</span>
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