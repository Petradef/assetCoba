import React, { Component } from "react";
import "../index";
import Axios from "axios";

class FormAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      merk: "",
      type: "",
      user: "",
      place: "",
      code: "",
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlerSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);

    Axios.post("http://localhost:3008/data", this.state)
      .then((response) => {
        console.log(response);
        alert("Insert data succesfully");
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({
      name: "",
      merk: "",
      type: "",
      user: "",
      place: "",
      code: "",
    });
  };

  render() {
    const { name, merk, type, user, place, code } = this.state;
    return (
      <div>
        Silahkan isi asset perusahaan dibawah ini :
        <form onSubmit={this.handlerSubmit}>
          <label>
            Name:
            <input
              type="text"
              required
              name="name"
              value={this.state.name}
              placeholder="isi Jenis produk nya"
              onChange={this.handleChange}
            />
            <br></br>
            Merk:
            <input
              type="text"
              required
              name="merk"
              value={merk}
              placeholder="isi Merk produk nya"
              onChange={this.handleChange}
            />
            <br></br>
            Tipe:
            <input
              type="text"
              required
              name="type"
              value={type}
              placeholder="isi tipe produk nya"
              onChange={this.handleChange}
            />
            <br></br>
            User:
            <input
              type="text"
              required
              name="user"
              value={user}
              placeholder="isi User yang pakai produk nya"
              onChange={this.handleChange}
            />
            <br></br>
            Ditempatkan Di
            <select name="place" value={place} onChange={this.handleChange}>
              <option value="BO">BO</option>
              <option value="Finance">Finance</option>
              <option value="Food Court">Food Court</option>
              <option value="HRD">HRD</option>
              <option value="Management">Management</option>
              <option value="Marketing">Marketing</option>
              <option value="Utilities">Utilities</option>
            </select>
            <br></br>
            Kode Asset :
            <input
              type="text"
              required
              name="code"
              value={code}
              placeholder="isi Kode Asset nya"
              onChange={this.handleChange}
            />
            <br></br>
          </label>
          <button type="submit" value="Submit">
            Tambah Asset
          </button>
        </form>
      </div>
    );
  }
}

export default FormAdd;
