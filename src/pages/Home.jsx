import Header from '../components/Header';

function Home() {
  return (
    <div>
      <Header title="Shape Your Lifestyle" />
      <button style={buttonStyle}>Join Us</button>
    </div>
  );
}

const buttonStyle = {
  padding: '1rem 2rem',
  backgroundColor: '#f0c040',
  color: '#000',
  border: 'none',
  borderRadius: '5px',
  fontSize: '1rem',
  cursor: 'pointer',
  marginTop: '1rem',
};

export default Home;