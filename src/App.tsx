import React, { useState } from 'react';
import './index.css';

const App: React.FC = () => {
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

  const appStyle: React.CSSProperties = {
    minHeight: '100vh',
    backgroundColor: '#1a0a0a',
    color: '#e8c49a',
    fontFamily: 'sans-serif',
    padding: '2rem',
    position: 'relative',
    overflow: 'hidden',
  };

  const nameStyle: React.CSSProperties = {
    position: 'absolute',
    color: 'rgba(232, 196, 154, 0.2)',
    fontSize: '1.2rem',
  };

  return (
    <div style={appStyle}>
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '4rem', color: '#e8c49a' }}>For Lovers</h1>
          <p style={{ fontSize: '1.2rem', color: '#e8c49a' }}>90s R&B Radio Dedication Platform</p>
        </header>

        <main style={{ width: '100%', maxWidth: '800px' }}>
          <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '2rem', borderRadius: '8px' }}>
            <h2 style={{ fontSize: '2rem', color: '#e8c49a', marginBottom: '1.5rem' }}>Send a Dedication</h2>
            <form onSubmit={handleSubmit}>
              <textarea
                style={{
                  width: '100%',
                  height: '100px',
                  backgroundColor: 'rgba(0, 0, 0, 0.2)',
                  border: '1px solid #e8c49a',
                  color: '#e8c49a',
                  padding: '1rem',
                  borderRadius: '4px',
                  resize: 'none',
                }}
                placeholder="This one goes out to..."
                value={dedication}
                onChange={(e) => setDedication(e.target.value)}
              />
              <button
                type="submit"
                style={{
                  width: '100%',
                  marginTop: '1rem',
                  backgroundColor: '#e8c49a',
                  color: '#1a0a0a',
                  fontWeight: 'bold',
                  padding: '0.75rem 1rem',
                  borderRadius: '4px',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Send Love
              </button>
            </form>
          </div>
        </main>
      </div>

      {names.map((name, i) => (
        <div
          key={i}
          className="name-float"
          style={{
            ...nameStyle,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * -10}s`,
            animationDuration: `${Math.random() * 10 + 10}s`,
          }}
        >
          {name}
        </div>
      ))}
    </div>
  );
};

export default App;
