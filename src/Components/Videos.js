import React, { Component } from 'react';

class Videos extends Component {
  render() {

    if(this.props.data){
      var featured = this.props.data.videos.map(function(videos){
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
      <section id="videos">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Unity Beginners' Playground</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                <iframe src="https://www.youtube.com/embed/I-c9k389KtA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                {featured}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Videos;
