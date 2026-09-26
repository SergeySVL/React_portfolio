
import { Link, NavLink } from 'react-router-dom';
import { ThemeToggle } from '../components/ThemeToggle';
import { StarBackground } from '../components/StarBackground';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';


/* function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}
 */


export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

    <ThemeToggle />

    <StarBackground />

    <Navbar />

    <main>
      <HeroSection />
      <AboutSection />
    </main>


    </div>;
};

