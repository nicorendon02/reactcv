import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import Welcome from './Components/Welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <BrowserRouter>
            <Header/>
              <Routes>
                <Route path="/" element={[<Welcome data={this.state.resumeData.main}/>,<Footer data={this.state.resumeData.main}/>]}/>
                <Route path="/about" element={[<About data={this.state.resumeData.main}/>,<Footer data={this.state.resumeData.main}/>]}/>
                <Route path="/resume" element={[<Resume data={this.state.resumeData.resume}/>,<Footer data={this.state.resumeData.main}/>]}/>
                <Route path="/portfolio" element={[<Portfolio data={this.state.resumeData.portfolio}/>,<Footer data={this.state.resumeData.main}/>]}/>
                <Route path="/testimonials" element={[<Testimonials data={this.state.resumeData.testimonials}/>,<Footer data={this.state.resumeData.main}/>]}/> 
                <Route path="/contact" element={[<Contact data={this.state.resumeData.main}/>,<Footer data={this.state.resumeData.main}/>]}/>
                {/* <Footer data={this.state.resumeData.main}/> */}
              </Routes>
    </BrowserRouter>
    );
  }
}

export default App;
