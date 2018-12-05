import React, { Component } from "react";
import imgLisa from "./images/lisa.jpg";
 
class Lisa extends Component {
  render() {
    return (
      <div className="container">
      <div className="img">
        <img style={{"width":"200px"}} src={imgLisa} /></div>
        <div className="p">
        <table className="ul">
          <tr><td>Lahir</td><td>:</td> <td>27 Maret 1997, Bangkok, Thailand</td></tr>
          <tr><td>Tinggi</td><td>:</td><td>1,66 m</td></tr>
          <tr><td>Nama lengkap</td><td>:</td><td>Lalisa Manoban</td></tr>
          <tr><td>Kebangsaan</td><td>:</td><td>Thailand</td></tr>
          <tr><td>Pendidikan</td><td>:</td><td>Prapamontree 2 School</td></tr>
        </table>
        </div>
      </div>
    );
  }
}
 
export default Lisa;