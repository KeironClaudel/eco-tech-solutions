import Navbar from "./components/layout/Navbar";
import { brand } from "./data/brand";

function App() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen px-6 py-10 text-slate-50">
        <h1 className="text-4xl font-bold">{brand.name}</h1>
        <p className="mt-4 text-slate-300">{brand.tagline}</p>
      </main>
    </>
  );
}

export default App;