"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

const About = () => {

  const router = useRouter();

  const handleClick = () => {
    console.log("Clicked");
    router.push("/");
  }

  return (
    <div>
      About
      <button onClick={handleClick}>Go back</button>
    </div>
  )
}

export default About