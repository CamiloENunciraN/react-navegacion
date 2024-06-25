import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {


  return (

    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

<Router>
<Route path="/" exact component={Home} />
<Route path="/dashboard" component={Dashboard} />
</Router>

function Home() {
  return <h2>Home</h2>;
}

function Dashboard() {
  return <h2>Dashboard</h2>;
}

export default App;
