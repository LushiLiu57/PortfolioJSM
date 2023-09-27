import AboutMe from "../components/AboutMe";
import Education from "../components/Education";
import FeaturedProjects from "../components/FeaturedProjects";
import GetInTouch from "../components/GetInTouch";
import Hero from "../components/Hero";
import Service from "../components/Service";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-6 text-black dark:text-white-800">
      <Hero />
      <Skills />
      <Service />
      <Education />
      <FeaturedProjects />
      <AboutMe />
      <GetInTouch />
    </main>
  );
}
