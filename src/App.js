import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Hexagon from './Components/Hexagon';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import Skills from './Components/Skills';
import Featured from './Components/Featured';
import Videos from './Components/Videos';
import VideosThree from './Components/VideosThree';
import AnionCreative from './Components/anioncreative';

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
      url:'resumeData.json',
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
    console.log('app');
  }


  render() {

    const hexHelpE = []
    const hexHelpO = []


    for (let i = 0; i < 41; i++) {
        hexHelpO.push(<Hexagon data = {6} prev = {55} curr = {89}/>)
    }
    for (let i = 0; i < 40; i++) {
        hexHelpE.push(<Hexagon data = {6} prev = {55} curr = {89}/>)
    }
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Videos data={this.state.resumeData.videos}/>
        <AnionCreative data = {this.state.resumeData.anioncreative}/>
        <Portfolio data={this.state.resumeData.portfolio}/>


        <section id="honycomb">

        <a className = "honeycomb-container" href = "https://www.underdognexus.com/">
          <div className="hex-container">
            {hexHelpO}
          </div>
          <div className="hex-container mid">
            {hexHelpE}
          </div>
          <div className="hex-container">
            {hexHelpO}
          </div>
          <h2 className = "hidden underdognexus">
            Underdog Nexus
          </h2>
        </a>

     </section>
        <Skills data={this.state.resumeData.resume}/>
        <Contact data={this.state.resumeData.main}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;






// <div className="row flex-row flex-2-column flip-grid">
//   <div>
//     <VideosThree data={this.state.resumeData.videos}/>
//     <span className = "hide-flip">
//       <Videos data={this.state.resumeData.videos}/>
//     </span>
//   </div>
//   <div className = "fl-2-column-child">
//     <AnionCreative data = {this.state.resumeData.anioncreative}/>
//     <span className = "hide-flip">
//       <Featured data={this.state.resumeData.featured}/>
//     </span>
//   </div>
// </div>
