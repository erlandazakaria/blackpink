import React, { Component } from "react";
import imgRose from "./images/rose.jpg";
 
class Rose extends Component {
  render() {
    return (
      <div className="container">
      <div className="img">
        <img style={{"width":"200px"}} src={imgRose} /></div>
        <div className="p">
        <table className="ul">
          <tr><td>Lahir</td><td>:</td> <td>11 Februari 1997, Auckland, Selandia Baru</td></tr>
          <tr><td>Tinggi</td><td>:</td><td>1,68 m</td></tr>
          <tr><td>Nama lengkap</td><td>:</td><td>Park Chae Young</td></tr>
          <tr><td>Kebangsaan</td><td>:</td><td>Selandia Baru, Korea Selatan</td></tr>
        </table>
        </div>
      </div>
    );
  }
}
 
export default Rose;