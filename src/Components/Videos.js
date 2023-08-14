import React, { Component } from 'react';

class Videos extends Component {
  render() {



    return (
      <section id="videos">

      <h1>Non Hosted Projects</h1>
      <div className="row flex-row flex-2-column">





            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf videos-wrap" >
              <iframe src="https://www.youtube.com/embed/KjdNxq2WNhU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf videos-wrap" >
                <iframe src="https://www.youtube.com/embed/KmLISdTJqfk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            </div>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf videos-wrap">
                <iframe src="https://www.youtube.com/embed/0zUPC9MxD3g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf videos-wrap last">
                <iframe src="https://www.youtube.com/embed/I-c9k389KtA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            </div>


        </div>
        <a href = "https://www.underdognexus.com/videos-pg/" class = "btn link button">More Videos &amp; Source Code</a>

   </section>
    );
  }
}

export default Videos;
