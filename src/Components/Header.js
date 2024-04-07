import * as THREE from 'three';
import React, { Suspense, Component } from 'react';
//import { Canvas} from '@react-three/fiber';
import bg1 from './images/tealOcean.png'

class Background extends Component{


  componentDidMount(){

    //console.log('back');
    this.scene = new THREE.Scene();
//this.scene.background = new THREE.Color( 0x2B2B2B );
    let delimieter = document.querySelector("#home").offsetHeight
    this.camera = new THREE.PerspectiveCamera(75,window.innerWidth/delimieter,0.1,1000)
    this.camera.position.z = 3

    this.renderer = new THREE.WebGLRenderer
    this.renderer.setSize(window.innerWidth, delimieter)
    //this.renderer.setClearColorHex( 0x2B2B2B, 1 );
    this.renderer.setClearColor( 0x000000, 0 ); // the default
    this.mount.appendChild(this.renderer.domElement)


    window.addEventListener( 'resize', ()=>{
      let delimieter = document.querySelector("#home").offsetHeight
      // console.log(delimieter);
      // let delimieter = window.innerHeight
      // if (window.innerHeight<window.innerWidth/2){
      //   delimieter  = window.innerWidth/2
      // }

      this.camera.aspect = window.innerWidth / delimieter;
      this.camera.updateProjectionMatrix();

      this.renderer.setSize( window.innerWidth, delimieter );

    } );

    const loader = new THREE.TextureLoader();

    const geometry = new THREE.PlaneGeometry(14,8,15,9);

    // const cgeometry = new THREE.BoxGeometry(1,1,1);
    // const cmaterial = new THREE.MeshBasicMaterial( {
    //     color: 0x00ff00
    //  } );
    //this.cube = new THREE.Mesh(cgeometry,cmaterial)

    //this.scene.add(this.cube)
    this.count= geometry.attributes.position.count;
    this.clock = new THREE.Clock();
    // const loader = new THREE.TextureLoader();
    //
    // // load a image resource
    var self = this

    loader.load(
    	// resource URL
      bg1,

    	// onLoad callback
    	function ( image ) {
    		// use the image, e.g. draw part of it on a canvas
    		// const canvas = document.createElement( 'canvas' );
    		// const context = canvas.getContext( '2d' );
        //console.log(image);
    		// context.drawImage( image, 100, 100 );
        self.material = new THREE.MeshBasicMaterial( {
            map: image
         } );
         self.mesh = new THREE.Mesh(geometry,self.material)

         self.scene.add(self.mesh)
         self.renderer.render(self.scene, self.camera)
         self.animation();
    	},

    	// onProgress callback currently not supported
    	undefined,

    	// onError callback
    	function () {
    		console.error( 'An error happened.' );
    	}
    );

  }

  animation = () =>{
    const time = this.clock.getElapsedTime();
    //console.log(this);
    if(this.mesh){
      for (let i =0; i<this.count; i++){
        //console.lo;g(this);
        const x = this.mesh.geometry.attributes.position.getX(i)
        const y = this.mesh.geometry.attributes.position.getY(i)

        const anim1 = 0.25 *Math.sin(y+time*0.7);

        this.mesh.geometry.attributes.position.setZ(i, anim1);
        this.mesh.geometry.computeVertexNormals();
        this.mesh.geometry.attributes.position.needsUpdate = true
        //console.log();
      }
      //console.log(this.count);
    }



    //this.cube.rotation.x +=0.01


    requestAnimationFrame(this.animation)
    this.renderer.render(this.scene, this.camera)
  }
  render() {
    return(
      <div
        class = "ThreeBackground"
         ref = {mount => {
          this.mount = mount;
        }}>
      </div>
    )
  }


}


class Header extends Component {



  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">
       <Background/>
      <nav id="nav-wrap" >

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
           <li><a className="smoothscroll" href="#videos">Featured</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3>{description}.</h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>


   </header>
    );
  }
}

export default Header;
