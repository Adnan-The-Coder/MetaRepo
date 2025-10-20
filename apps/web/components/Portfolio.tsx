import React from 'react'
import RenderBackground from './ui/CyberParticleBG'

function Portfolio() {
  return (
    <>
    <RenderBackground/>
    <div className="relative z-10 flex min-h-screen flex-col items-center justify-center bg-black/70 px-6 py-24 text-white">
      <h1 className="mb-8 text-4xl font-bold">My Portfolio</h1>
        <p className="max-w-2xl text-center">
            Welcome to my portfolio! Here you`ll find a selection of my projects showcasing my skills and experience in web development. Feel free to explore and reach out if you`d like to collaborate!
        </p>
    </div>
    </>
  )
}

export default Portfolio
