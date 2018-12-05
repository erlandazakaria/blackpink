import React, { Component } from "react";
import imgJisoo from "./images/jisoo.jpg";
 
class Jisoo extends Component {
  render() {
    return (
      <div className="container">
      <div className="img">
        <img style={{"width":"300px"}} src={imgJisoo} /></div>
        <div className="p">
        <table className="ul"   >
          <tr><td>Lahir</td><td>:</td> <td>3 Januari 1995, Sanbon-dong, Gunpo, Korea Selatan</td></tr>
          <tr><td>Nama lengkap</td><td>:</td><td>Kim Jisoo</td></tr>
          <tr><td>Kebangsaan</td><td>:</td><td>Korea Selatan</td></tr>
        </table>
        </div>
      </div>
    );
  }
}
 
export default Jisoo;