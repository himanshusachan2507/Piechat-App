import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button"

const topics = [
  {
    text: "Python",
    img: "/python.png",
    desc: "Lets discuss everything to python",
    slug: "Python"
  },
  {
    text: "JavaScript",
    img: "/javascript.png",
    desc: "Explore the world of JavaScript!",
    slug: "Js"
  },
  {
    text: "React",
    img: "/react.png",
    desc: "Build amazing user interfaces with React.",
    slug: "React"
  },
  {
    text: "CSS",
    img: "/css.png",
    desc: "Explore the world of designing and css.",
    slug: "CSS"
  },
  
  {
    text: "Web development", 
    img: "/html.web",
    desc: "Discuss front-end, back-end, and full-stack web development.",
    slug: "Web"
  }
];
const Forums = () => {
  return (
    <div className='container mx-auto my-28'>
      <h1 className="text-4xl font-semibold text-center flex gap-2 justify-center mb-10" >Discussion forums</h1>
      <div className='flex flex-wrap justify-center'>
        {topics.map((topic)=>{
          return <div key={topic.img} className='shadow-lg bg-slate-200 w-1/4 m-4 flex justify-center flex-col items-center py-10'>
            <Image alt={topic.desc}src={topic.img} width={74} height={74} className=''></Image>
            <h2 className='text-2xl'>{topic.text}</h2>
            <p className='px-3'>{topic.desc}</p>
            <Link href={`/forum/${topic.slug}`}>
            <Button className='px-4 border-slate-300 py-2'>Discuss Now</Button>
            </Link>
            </div>
        })}
      </div>
    </div>
  ) 
}

export default Forums