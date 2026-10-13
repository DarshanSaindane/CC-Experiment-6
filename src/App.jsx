
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="hero">
        <h1>PaaS Environment</h1>
        <h2>Deployed via AWS Amplify</h2>
        <p>My React PaaS application is live!</p>
        <span>SPPU BE ENTC | Cloud Computing Experiment 6</span>
      </header>

      <main className="content">
        <h2>Welcome to My Cloud Application</h2>
        <p>
          This React application demonstrates deployment
          using Platform as a Service (PaaS).
        </p>
        <p>Built with React and Vite, hosted using AWS Amplify.</p>
      </main>

      <footer>Cloud Computing Practical - SPPU</footer>
    </div>
  );
}

export default App;
