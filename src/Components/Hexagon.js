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


          var fibo_items = [{width:13,color:"hexColor5"},{width:21,color:"hexColor4"},{width:34,color:"hexColor3"},{width:55,color:"hexColor2"},{width:89,color:"hexColor1"}]
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
            if (data%4==0){
              var left = ""
              var top = "1%"
              var margin = "auto"
            }
            else if (data%4==1) {
              var left = ""
              var top = "45%"
              var margin = "auto"
            }
            else if (data%4==2) {
              var left = ""
              var top = "20%"
              var margin = "auto 5px 5px auto"
            }
            else if (data%4==3) {
              var left = ""
              var top = "0px"
              var margin = "auto"
            }
          }

          styles = {
            hex:{
              zIndex: z,
              width: width,
              height: height,
              margin: 0,
              top: top,
              left: left,
              margin: margin

            }
          };
          const beforeStyle = {
            borderBottom: h+"px solid",
            borderLeft: b+"px solid transparent",
            borderRight: b+"px solid transparent",
            content: "",
            position: "absolute",
            width: 0,
            bottom: "100%",
          };

          const afterStyle = {
            borderTop:  h+"px solid ",
            borderLeft: b+"px solid transparent",
            borderRight: b+"px solid transparent",
            content: "",
            position: "absolute",
            width: 0,
            top: "100%"
          };
          console.log(data);


          data--;

          fibo.push(<div class={hex} key = {num.width} style ={styles.hex}>
                        <div style={beforeStyle}></div>
                        <Hexagon data = {data}/>
                        <div style={afterStyle}></div>
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
