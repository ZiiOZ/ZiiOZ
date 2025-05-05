import { useEffect, useState } from 'react';

export default function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/hello`) // Replace with real path
      .then(res => res.json())
      .then(json => setData(json.message || 'Success!'))
      .catch(err => setData('Failed to connect'));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>🚀 ZiiOZ is Live!</h1>
      <p>{data}</p>
    </div>
  );
}
