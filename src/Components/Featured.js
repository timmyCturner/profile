import React, { Component } from 'react';

class Featured extends Component {
  render() {

    if(this.props.data){
      var featured = this.props.data.featured.map(function(featured){
        var featuredImage = 'images/portfolio/'+featured.image;
        return <div key={featured.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={featured.url} title={featured.title}>
               <img alt={featured.title} src={featuredImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{featured.title}</h5>
                     <p>{featured.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>


        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Featured ThreeJS Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {featured}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Featured;
