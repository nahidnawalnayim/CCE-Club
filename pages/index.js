import CCE from "../components/CCE";
import Club from "../components/Club";
import Executives from "../components/executives/Executives";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className='min-h-screen snap-y '>
      <Hero />
      <CCE />
      <Club />
      <Executives />
    </div>
  );
}
