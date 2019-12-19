import React, { Fragment } from 'react';
import './App.scss';
import 'font-awesome/css/font-awesome.min.css';
import Header from './components/Header';
import Aside from './components/Aside';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
      <Fragment>
         <Router>
            {/* Header start */ }
              <Header />
            {/* Header start */ }

            {/* Main body start */ }
              <main className="main-container">

                {/* Aside panel start */ }
                    <Aside />
                {/* Aside panel start */ } 
                
                {/* Main body panel start */ }
                    <Main />
                {/* Main body panel start */ } 
                
              </main>
            {/* Main body start */}

            {/* Footer start */ }
              <Footer />
            {/* Footer start */ }
          </Router>
      </Fragment>  
  );
}

export default App;
