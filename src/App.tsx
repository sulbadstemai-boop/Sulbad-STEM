import { Navigation } from './sections/Navigation';
import { Hero } from './sections/Hero';
import { K12Courses } from './sections/K12Courses';
import { Science } from './sections/Science';
import { Technology } from './sections/Technology';
import { Engineering } from './sections/Engineering';
import { Mathematics } from './sections/Mathematics';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[hsl(220_25%_8%)]">
      <Navigation />
      <main>
        <Hero />
        <K12Courses />
        <Science />
        <Technology />
        <Engineering />
        <Mathematics />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
