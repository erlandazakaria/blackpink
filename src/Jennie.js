import React, { Component } from "react";
import imgJennie from "./images/jennie.jpg";
 
class Jennie extends Component {
  render() {
    return (
      <div className="container">
      <div className="img">
        <img style={{"width":"300px"}} src={imgJennie} /></div>
        <div className="p">
        <table className="ul">
          <tr><td>Lahir</td><td>:</td> <td>16 Januari 1996, Cheongdam-dong, Seoul, Korea Selatan</td></tr>
          <tr><td>Tinggi</td><td>:</td><td>1,63 m</td></tr>
          <tr><td>Kebangsaan</td><td>:</td><td>Korea Selatan</td></tr>
          <tr><td>Pendidikan</td><td>:</td><td>Cheongdam Middle School, ACG Parnell College</td></tr>
        </table>
        </div>
      </div>
    );
  }
}
 
export default Jennie;