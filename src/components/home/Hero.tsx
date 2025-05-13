import React from 'react';

export default function Hero() {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: 'url("https://cdn.prod.website-files.com/664cfafd1b780dd90b9bc416/664cfafd1b780dd90b9bcd8a_hero-bg.png")',
      }}
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Site</h1>
        <p className="text-lg">We offer amazing services to help your business grow.</p>
      </div>
    </div>
  );
}
