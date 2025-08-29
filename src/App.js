// src/App.js
import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import { SkeletonGrid } from './components/ui/skeleton';
import './index.css';
const Experience = React.lazy(() => import('./components/Experience'));
const Projects = React.lazy(() => import('./components/Projects'));
const Skills = React.lazy(() => import('./components/Skills'));
const Education = React.lazy(() => import('./components/Education'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Sujeet Kumar - Software Developer</title>
        <meta name="description" content="Welcome to Sujeet Kumar's portfolio website. I'm Sujeet Kumar, a passionate software developer showcasing my projects, skills, and experience." />
        <meta name="author" content="SUJEET KUMAR" />
        <meta property="og:title" content="Sujeet Kumar - Portfolio" />
        <meta property="og:description" content="Welcome to my portfolio website. Explore my projects, skills, and professional experience." />
        <meta property="og:type" content="website" />
        {/* SEO: Structured Data for Google */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Sujeet Kumar",
            "sameAs": [
              "https://github.com/SUJEET-JMI",
              "https://www.linkedin.com/in/sujeet-kumar-ba2825216",
            ],
            "jobTitle": "Software Developer ",
            "description": "Portfolio website of Sujeet Kumar, Software Developer . Projects, skills, experience, and contact information."
          }
        `}</script>
        {/* SEO: Robots meta tag */}
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Header />
      <div className="main-content">
        <About />
        <Suspense fallback={<div className="container py-16"><SkeletonGrid count={6} /></div>}>
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;