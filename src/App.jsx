import React from 'react';
import HeroSection from './components/HeroSection';
import FeatureGrid from './components/FeatureGrid';
import LivePreviewMock from './components/LivePreviewMock';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#06060a] font-inter text-white">
      <HeroSection />
      <FeatureGrid />
      <LivePreviewMock />
      <Footer />
    </div>
  );
}

export default App;
