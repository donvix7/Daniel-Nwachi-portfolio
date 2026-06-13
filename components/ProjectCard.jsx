import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectCard = ({projects}) => {

  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 gap-10 ">
        {
            projects && projects.map((project, idx) => {
                const url = project.imageUrl;
                const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;
                return (
                    <div key={idx} className='flex flex-col gap-4 bg-slate-100 rounded-2xl  overflow-hidden '>

                <div className="flex flex-col gap-4 overflow-hidden " >
                    <Link href={url} target='_blank'>

                    <Image
                        alt="Project Core"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
                        src={screenshotUrl}
                       width={500}
                       height={500}
                       loading="lazy"
                       unoptimized
                       
                       
                    />
                    </Link>
                </div>
                <div className="flex flex-col gap-4">
                    <span className="font-label-sm text-label-sm uppercase tracking-[0.2em]">{project.category || 'SYSTEM'} / {project.year || '2023'}</span>
                    <h3 className="font-headline-md text-headline-md font-mono tracking-wider">{project.title || 'Core Library'}</h3>
                    <p className='font-body-md text-body-md '>{project.description || 'A comprehensive design system focused on extreme legibility and functional minimalism for high-complexity data dashboards.'}</p>
                   <Link href={url} target='_blank'  className="bg-slate-900 text-slate-100 w-fit px-10 py-2 mt-5 m-2 view-link inline-flex items-center justify-end font-mono transition-all duration-300">
                  View Project
                </Link>
                </div>
                </div>
                )
            }) 
        }
    </div>
  )
}

export default ProjectCard