import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white pt-24">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main className="max-w-7xl mx-auto px-4 py-8">
              <h1 className="text-3xl font-serif">VICTOR TELLAGIO</h1>
              <p className="mt-4 font-sans">DJ & Producer</p>
            </main>
          } />
          <Route path="/about" element={
            <main className="max-w-7xl mx-auto px-4 py-8">
              <h1 className="text-2xl font-serif mb-4">ABOUT</h1>
              <p>Informace o DJ/producentovi...</p>
            </main>
          } />
          <Route path="/music" element={
            <main className="max-w-7xl mx-auto px-4 py-8">
              <h1 className="text-2xl font-serif mb-4">MUSIC</h1>
              <p>Hudební tvorba...</p>
            </main>
          } />
          <Route path="/events" element={
            <main className="max-w-7xl mx-auto px-4 py-8">
              <h1 className="text-2xl font-serif mb-4">EVENTS</h1>
              <p>Nadcházející události...</p>
            </main>
          } />
          <Route path="/socials" element={
            <main className="max-w-7xl mx-auto px-4 py-8">
              <h1 className="text-2xl font-serif mb-4">SOCIALS</h1>
              <p>Sociální sítě...</p>
            </main>
          } />
          <Route path="/contact" element={
            <main className="max-w-7xl mx-auto px-4 py-8">
              <h1 className="text-2xl font-serif mb-4">CONTACT</h1>
              <p>Kontaktní informace...</p>
            </main>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
