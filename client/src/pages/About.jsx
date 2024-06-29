import React from "react";

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font-semibold text-center my-7">About Piyush's Blog</h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Welcome to Piyush's Blog! This blog was created by Piyush Makad as
              a personal project to share his views and thoughts about about
              competitive coding and MERN web development. Competitive coding
              has honed my analytical skills and taught me to approach problems
              methodically. Participating in various coding contests and
              hackathons has not only improved my coding abilities but also
              fostered a strong sense of perseverance and resilience. I love the
              challenge of finding the most efficient solutions and constantly
              pushing myself to improve.
            </p>
            <p>
              Alongside my passion for competitive coding, I have a profound
              interest in web development, particularly with the MERN stack
              (MongoDB, Express.js, React.js, and Node.js). The MERN stack
              allows me to build full-stack applications with ease and
              flexibility, leveraging JavaScript on both the client and server
              sides. I enjoy creating dynamic and responsive web applications
              that provide a seamless user experience.
            </p>
            <p>
              Through this blog, I aim to share my journey, insights, and
              experiences in competitive coding and MERN web development. I hope
              to inspire and connect with like-minded individuals who share a
              passion for coding and technology. Thank you for visiting, and I
              look forward to engaging with you through my posts!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
