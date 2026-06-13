"use client"

import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    // Simple Intersection Observer for reveal animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(el => observer.observe(el));

    // Smooth scroll for nav links
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

      <main className="p-10 flex flex-col gap-10">
        {/* Hero Section / Identity */}
        <section className="mt-stack-lg md:mt-section-gap grid grid-cols-1 md:grid-cols-12 gap-gutter items-end reveal-on-scroll">
          <div className="md:col-span-7 flex flex-col gap-4">
            <span className="font-light uppercase tracking-widest ">Design / Technology / Invisible Utility</span>
            <h1 className="font-dbo md:text-md text-6xl text-slate-900">Crafting quiet solutions for complex problems.</h1>
          </div>
          <div className="md:col-span-5 md:pl-stack-lg">
            <div className="aspect-square bg-slate-100 overflow-hidden transition-all duration-700">
              <Image
                alt="Profile Photo"
                className="w-full h-full object-cover"
                src="/profile.jpg"
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>

        {/* Biography Section */}
        <section className="grid grid-cols-2 gap-10reveal-on-scroll mt-20 mb-20">
          <div className="flex-1">
            <h2 className="font-bold text-3xl text-slate-900 sticky top-24">The Approach</h2>
          </div>
          <div className="flex flex-col gap-10 flex-1 text-gray-800 font-light">
            <p className="font-body-lg text-body-lg text-primary leading-relaxed">
              I believe that the best design is one that feels inevitable. My practice is rooted in <span className="font-semibold">Invisible Utility</span>—the idea that technology should serve human needs without drawing unnecessary attention to itself.
            </p>
            <p className="font-body-md text-body-md text-secondary leading-relaxed">
              With over a decade of experience navigating the intersection of product design and technical architecture, I help teams build systems that are as robust as they are elegant. My work prioritizes clarity, performance, and accessibility, ensuring that every interaction is meaningful and every pixel serves a purpose.
            </p>
            <p className="font-body-md text-body-md text-secondary leading-relaxed">
              Currently based in the Pacific Northwest, I collaborate with forward-thinking companies to translate abstract concepts into tangible, high-performance digital products. Whether it's a complex enterprise dashboard or a refined consumer experience, my goal is to strip away the noise until only the essence remains.
            </p>
            <div className="pt-stack-md flex flex-wrap gap-stack-sm">
              <div className="flex items-center gap-2 px-8 py-2 uppercase bg-slate-200 text-slate-900">
                <span className="font-mono">Available for select projects</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services & Skills Grid (Bento Style) */}
        <section className="mt-20 reveal-on-scroll">
          <h2 className="font-bold text-3xl text-slate-900 sticky top-24 mb-10">Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            {/* Bento Card 1 */}
            <div className="md:col-span-2 bg-white p-10 border border-slate-300 flex flex-col justify-between hover:bg-white transition-colors group py-20 px-20 ">
              <div className='flex flex-col gap-4'>
                <h3 className="font-bold text-2xl text-slate-900 ">Systems Architecture</h3>
                <p className="font-body-md text-body-md text-secondary max-w-md">Developing scalable design systems and frontend architectures that empower teams to build consistent, high-quality interfaces at scale.</p>
              </div>
              <div className="flex flex-wrap gap-4 mt-20">
                <span className="bg-slate-200 px-8 py-2 font-mono text-slate-800">Tailwind</span>
                <span className="bg-slate-200 px-8 py-2 font-mono text-slate-800">React</span>
                <span className="bg-slate-200 px-8 py-2 font-mono text-slate-800">Design Tokens</span>
              </div>
            </div>

            {/* Bento Card 2 */}
            <div className="bg-slate-900  border border-slate-200 flex flex-col justify-between hover:bg-primary-container transition-colors py-20 px-20  tracking-wider">
              <div className='flex flex-col gap-4'>
                <h3 className="font-bold text-2xl text-white">Interaction Design</h3>
                <p className="font-body-md text-slate-300 opacity-90">Micro-interactions, motion studies, and behavioral design that bring interfaces to life with precision.</p>
              </div>
              <div className="mt-stack-lg">
              </div>
            </div>

            {/* Bento Card 3 */}
            <div className="bg-white p-stack-lg col-span-1 border border-slate-300 flex flex-col justify-between transition-colors p-20 tracking-wider">
              <div className='flex flex-col gap-4'>
                <h3 className="font-headline-md text-headline-md text-primary mb-stack-sm">Accessibility</h3>
                <p className="font-body-md text-body-md text-secondary">Crafting inclusive experiences that meet WCAG 2.1 AA standards without compromising on aesthetic quality.</p>
              </div>
            </div>

            {/* Bento Card 4 */}
            <div className="col-span-2 flex gap-4 bg-slate-100  p-20 border border-slate-300">
              <div className=" flex flex-col gap-4 ">
                <h3 className="font-headline-md text-headline-md text-primary mb-stack-sm">Strategy &amp; Consulting</h3>
                <p className="font-body-md text-body-md text-secondary">Helping leadership teams define product roadmaps, audit existing systems, and implement design-led growth strategies.</p>
              </div>
              <div className="  w-full flex gap-4 justify-center items-center">
                <div className="w-20 h-20  bg-white border-slate-800 flex items-center justify-center p-4">
                </div>
                <div className="w-20 h-20 bg-white border-slate-800  flex items-center justify-center p-4">
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-40">
          <div className="bg-slate-800 text-white grid grid-cols-3 gap-10 justify-between items-center mx-20 my-20 px-20 py-20 ">
            <div className="max-w-3xl col-span-2">
              <h2 className="font-light text-4xl mb-4">Ready to build something meaningful?</h2>
              <p className="font-light text-slate-400 text-xl">I'm currently accepting new commissions for Q3 2024. Reach out and let's discuss how we can work together.</p>
            </div>
            <div className="flex flex-col gap-4 w-full col-span-1">
              <Link href={'/projects'} className="bg-white px-10 py-4 text-slate-900 uppercase cursor-pointer text-center text-sm tracking-wider">Start a Conversation</Link>
              <div className="flex justify-between items-center gap-4">
                <Link href={"#"} className=" font-mono text-slate-400 underline text-sm hover:text-white transition-colors cursor-pointer underline-offset-8 hover:underline decoration-slate-400 decoration-2" >Download Resume</Link>
                <Link href={"#"} className=" font-mono text-slate-400 underline text-sm hover:text-white transition-colors cursor-pointer underline-offset-8 hover:underline decoration-slate-400 decoration-2" >View Portfolio</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

   <Footer/>
    </>
  );
};

export default About;