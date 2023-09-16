//imported CSS files
import "./App.css";

// imported React pages
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import NotFound from "./pages/NotFound";

// imported tools
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <body className="App-body">
          <Nav />
          <div>
            <Switch>
              <Route path exact="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/work" component={Work} />
              <Route path="/contact" component={Contact} />
              <Route path="/experience" component={Experience} />
              <Route path="/resume" component={Resume} />
              <Route component={NotFound} /> {/* 404 route */}
            </Switch>
          </div>
          <Footer />
        </body>
      </div>
    </Router>
  );
}

export default App;
