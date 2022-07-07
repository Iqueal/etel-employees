import { Navbar } from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 style={{ textAlign: 'center' }}>Home Page</h1>
      <p style={{ textAlign: 'center' }}>
        Please visit <strong>Employees page</strong> to view all Employees
      </p>
    </div>
  );
}

export default App;
