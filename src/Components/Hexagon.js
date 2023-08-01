import React, { Component } from 'react';

class Hexagon extends Component {




    assemble(data,prev,curr){
      let divs = [];
      let fibo = []
      var styles = {};
      var width = 100;
      var height = 55;
      var b = 50;
      var h = 27.5

      if(data>=0&&curr>=8){
          //#FFF8DC (Cornsilk)
          // #FFEFD5 (Papaya Whip)
          // #FFE4C4 (Bisque)
          // #FFDAB9 (Peach Puff)
          // #FFCFA8 (Champagne)

          // var temp = curr
          // curr += prev
          // prev = temp
          // curr


          var fibo_items = ["hexColor5","hexColor4","hexColor3","hexColor2","hexColor1"]


          const length = fibo_items.length;
          let color = fibo_items[((data)%5)]
          // let color2 = fibo_items[((data+5)%5)]
          let hex = "hex " + color
          var left = "1%"
          var top = "1%"
          var margin = "none"
          //console.log(num);
          let w = ((curr- Number.EPSILON) *18.2)/10//Math.floor((num.width+ Number.EPSILON) *18.2)/10
          //console.log(w);
          width = w+"px"
          //console.log(width);
          height = curr+"px"

          b= ((w+Number.EPSILON) /20)*10//Math.floor((w+Number.EPSILON) /20)*10
          h = (curr/20)*10
          let z = 144-curr

          if (data == 6){
            hex = "hex prime " + color
          }



          // styles = {
          //   hex:{
          //     top: top,
          //     left: left,
          //     height: (curr),
          //     zIndex: z,
          //   }
          // };

          const string =  curr+"px"
          //let fill1 = fibo_items[((data)%5)]
          const mystyle = {

            zIndex: z,
            width: string,
            height: string,

          };

          if (data == 6){

            let temp  = prev;prev = curr - prev;curr = temp;data--;
            // console.log('Filter');
            // console.log(data);
            fibo.push(<><div className={hex} key = {data} >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" style={mystyle} color="red">
                <polygon className={fibo_items[((data+1) % 6)]} points="100,10 190,50 190,150 100,190 10,150 10,50" />
                <polygon className={fibo_items[((data+2) % 6)]} points="100,10 190,50 190,150 100,190 10,150 10,50" transform="translate(9, 7) scale(0.9)"  />
                <polygon className={fibo_items[((data+3) % 6)]} points="100,10 190,50 190,150 100,190 10,150 10,50" transform="translate(18, 14) scale(0.8)"  />
                <polygon className={fibo_items[((data+4) % 6)]} points="100,10 190,50 190,150 100,190 10,150 10,50" transform="translate(27, 21) scale(0.7)"  />




                </svg>

                          <Hexagon  key = {data}  data = {data} prev = {prev} curr = {curr} />
                      </div>
                      </>)

          }
          else{
            let temp  = prev;prev = curr - prev;curr = temp;data--;
            let svg1,svg2;

            //<polygon className={fibo_items[((data+2) % 6)]} points="100,10 190,50 190,150 100,190 10,150 10,50" transform="translate(12, 8) scale(0.9)"  />
            //<polygon className={fibo_items[((data+3) % 6)]} points="100,10 190,50 190,150 100,190 10,150 10,50" transform="translate(25, 16) scale(0.8)"  />
            fibo.push(<><div className={hex} key = {data} style={mystyle}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" style ={mystyle} color = "red">
                            <polygon className={fibo_items[((data+1) % 6)]} points="100,10 190,50 190,150 100,190 10,150 10,50" />

                          </svg>

                          <Hexagon data = {data} prev = {prev} curr = {(curr)} />
                      </div>

                      </>)

          }
          // fibo.push(<div class={hex} key = {num.width} style ={styles.hex}>
          //               <div style={beforeStyle}></div>
          //               <Hexagon data = {data}/>
          //               <div style={afterStyle}></div>
          //           </div>)

          return fibo
      }






  }

  render() {

    //console.log(this);

    if(this.props.data){
      //console.log(this.props.data);
      var assemble = this.assemble(this.props.data,this.props.prev,this.props.curr,this.props.addon)

    }
    // const finalAssemble = []
    // for (let i = 0; i < 15; i++) {
    //     finalAssemble.push(<Hexagon data = {4}/>)
    // }
    // console.log(finalAssemble);
    // console.log(assemble);
    return (


          <>{assemble}</>

    );
  }
}

export default Hexagon;
