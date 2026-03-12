import { useState } from 'react';

function App() {
  const [dedication, setDedication] = useState('');

  const names = [
    'Ruby', 'Doris', 'Johnnie', 'Grandma', 'Pops', 'Nana', 'Auntie',
    'My Boo', 'My Love', 'My King', 'My Queen', 'My Sunshine',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dedication submitted:', dedication);
    setDedication('');
  };

  return (
    <div className="min-h-screen bg-brand-bg text-white font-body p-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {names.map((name) => (
          <div
            key={name}
            className="absolute text-gray-400 opacity-20 text-lg name-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 20 + 20}s`,
              animationDelay: `${Math.random() * -40}s`,
            }}
          >
            {name}
          </div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <header className="text-center mb-12">
          <h1 className="text-6xl font-display text-brand-amber animate-pulse">For Lovers</h1>
          <p className="text-lg text-gray-300 mt-2">90s R&B Radio Dedication Platform</p>
        </header>

        <main className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="bg-brand-brown/50 p-8 rounded-lg shadow-lg backdrop-blur-sm">
            <h2 className="text-3xl font-display text-brand-red mb-6">Send a Dedication</h2>
            <form onSubmit={handleSubmit}>
              <textarea
                className="w-full h-40 bg-black/30 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-amber transition-all duration-300 resize-none"
                placeholder="This one goes out to..."
                value={dedication}
                onChange={(e) => setDedication(e.target.value)}
              />
              <button
                type="submit"
                className="w-full mt-4 bg-brand-red hover:bg-brand-amber text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Send Love
              </button>
            </form>
          </div>

          <div className="bg-brand-brown/50 p-8 rounded-lg shadow-lg backdrop-blur-sm">
            <h2 className="text-3xl font-display text-brand-red mb-6">Now Playing</h2>
            <div className="aspect-w-1 aspect-h-1 mb-6 rounded-lg overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Generated illustration" 
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
            </div>
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <button className="text-brand-amber hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="w-full bg-black/30 rounded-full h-2">
                  <div className="bg-brand-amber h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
              <p className="text-gray-300 italic">"This one goes out to my grandmother Ruby. She made the best sweet potato pie and never let anyone leave hungry."</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
