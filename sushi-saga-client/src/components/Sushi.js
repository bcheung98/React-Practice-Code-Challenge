import React, { Component } from 'react'

class Sushi extends Component {

  state = {
    eaten: false
  }

  eatSushi = () => {
    if (this.props.money > 0 && !this.state.eaten) {
      this.setState({
        eaten: true
      }, () => this.props.addPlate(this.props.sushi.price))
    }
  };

  render() {
    let { name, img_url, price } = this.props.sushi
    return (
      <div className="sushi">
        <div className="plate" onClick={this.eatSushi}>
          {!this.state.eaten ? <img src={img_url} width="100%" /> : <img src={null} width="100%" />}
        </div>
        <h4 className="sushi-details">
          {name} - ${price}
        </h4>
      </div>
    )
  }
}
export default Sushi

// const eatSushi = () => {
//   console.log(":3");
//   isEaten = true;
// }

// const Sushi = (props) => {
//   let {name, img_url, price} = props.sushi
//   return (
//     <div className="sushi">
//       <div className="plate" onClick={eatSushi}>
//         { 
//           /* Tell me if this sushi has been eaten! */ 
//           !isEaten ? <img src={img_url} width="100%" /> : <img src={null} width="100%" />
//         }
//       </div>
//       <h4 className="sushi-details">
//         {name} - ${price}
//       </h4>
//     </div>
//   )
// }