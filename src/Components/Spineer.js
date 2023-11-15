import React, {Component} from "react";
import loading from './loading.gif'
// here also if you want in function based component first remove render() ans remove line 4 and write const spineer = ()=>{}
export class spineer extends Component {
  render(){
    return(
      <div className="text-center my-3" >
        <img src={loading} alt = "loading"/>
      </div>
    )
  }
}
export default spineer