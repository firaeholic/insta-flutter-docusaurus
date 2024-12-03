function MyButton({ to, label }) {
  return (
    <a
      href={to}
      style={{
        textDecoration: 'none',
      }}
    >
      <button
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        {label || 'Click Me'}
      </button>
    </a>
  );
}
