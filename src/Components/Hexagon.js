import React, { Component } from 'react';

class Hexagon extends Component {




    assemble(data){
      let divs = [];
      let fibo = []
      var styles = {};
      var width = 100;
      var height = 55;
      var b = 50;
      var h = 27.5

      if(data>=0){
          //#FFF8DC (Cornsilk)
          // #FFEFD5 (Papaya Whip)
          // #FFE4C4 (Bisque)
          // #FFDAB9 (Peach Puff)
          // #FFCFA8 (Champagne)


          var fibo_items = [{width:5,color:"hexColor3"},{width:8,color:"hexColor4"},{width:13,color:"hexColor5"},{width:21,color:"hexColor4"},{width:34,color:"hexColor3"},{width:55,color:"hexColor2"},{width:89,color:"hexColor1"}]
          const length = fibo_items.length;
          let num = fibo_items[(data)]
          let hex = "hex " + num.color
          var left = "1%"
          var top = "1%"
          var margin = "none"
          //console.log(num);
          let w = ((num.width- Number.EPSILON) *18.2)/10//Math.floor((num.width+ Number.EPSILON) *18.2)/10
          //console.log(w);
          width = w+"px"
          //console.log(width);
          height = num.width+"px"

          b= ((w+Number.EPSILON) /20)*10//Math.floor((w+Number.EPSILON) /20)*10
          h = (num.width/20)*10
          let z = 144-num.width

          if (data == fibo_items.length-1){
            hex = "hex prime " + num.color
          }

          else{
            if (data==length-1){
              var left = "0"
              var top = "0"

            }
            else if (data==length-2) {
              var left = "17px"
              var top = "5px"

            }
            else if (data==length-3) {
              var left = "34px"
              var top = "14px"

            }
            else if (data==length-4) {
              var left = "42px"
              var top = "23px"

            }
            else if (data==length-4) {
              var left = "44px"
              var top = "13px"
            }
            else if (data==length-5) {
              var left = "45px"
              var top = "29px"
            }
            else if (data==length-6) {
              var left = "46px"
              var top = "31px"
            }
            else{
              var left = "0px"
              var top = "0px"
            }
          }

          // styles = {
          //   hex:{
          //     zIndex: z,
          //     width: width,
          //     height: height,
          //     margin: 0,
          //     top: top,
          //     left: left,
          //     margin: margin
          //
          //   }
          // };
          styles = {
            hex:{
              zIndex: z,
              top: top,
              left: left,
              height: height,



            }
          };
          // const beforeStyle = {
          //   borderBottom: h+"px solid",
          //   borderLeft: b+"px solid transparent",
          //   borderRight: b+"px solid transparent",
          //   content: "",
          //   position: "absolute",
          //   width: 0,
          //   bottom: "100%",
          // };
          //
          // const afterStyle = {
          //   borderTop:  h+"px solid ",
          //   borderLeft: b+"px solid transparent",
          //   borderRight: b+"px solid transparent",
          //   content: "",
          //   position: "absolute",
          //   width: 0,
          //   top: "100%"
          // };
          // console.log(data);


          data--;

          // fibo.push(<div class={hex} key = {num.width} style ={styles.hex}>
          //               <div style={beforeStyle}></div>
          //               <Hexagon data = {data}/>
          //               <div style={afterStyle}></div>
          //           </div>)
          fibo.push(<div className={hex} key = {data} >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" style ={styles.hex} color = "red">
                          <polygon points="100,10 190,50 190,150 100,190 10,150 10,50" />
                        </svg>
                        <Hexagon key = {data} data = {data}/>
                    </div>)
          return fibo
      }






  }

  render() {

    if(this.props.data){
      //console.log(this.props.data);
      var assemble = this.assemble(this.props.data)
    }
    // const finalAssemble = []
    // for (let i = 0; i < 15; i++) {
    //     finalAssemble.push(<Hexagon data = {4}/>)
    // }
    // console.log(finalAssemble);
    // console.log(assemble);
    return (


          <span>{assemble}</span>

    );
  }
}

export default Hexagon;
