import React from 'react';

export function Sliding() {
  return (
    <div style={{
      width: '100%', height: '100%',
      display: 'flex', alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none',
    }}>
      {/* You can put any static or additional overlay UI here */}
    </div>
  );
}
