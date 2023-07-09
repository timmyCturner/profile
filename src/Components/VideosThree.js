import React, { Component } from 'react';

class VideosThree extends Component {
  render() {

    return (
      <section id="videos">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Featured React Three Fiber</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf videos-wrap first" >
                <iframe src="https://www.youtube.com/embed/KmLISdTJqfk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            </div>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf videos-wrap">
                <iframe src="https://www.youtube.com/embed/0zUPC9MxD3g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default VideosThree;
