import React, { Component } from "react";
import Axios from "axios";
import "../component/css/List.css";
import "bootstrap/dist/css/bootstrap.css";
import AddAssetModal from "./AddAssetModal";
import EditAssetModal from "./EditAssetModal";
import { Button, ButtonToolbar } from "react-bootstrap";
import "@fortawesome/fontawesome-free";

class List extends Component {
  state = {
    asset: [],
    addModalShow: false,
    editModalShow: false,
  };

  async componentDidMount() {
    this.refreshList();
    console.log();
  }

  refreshList() {
    Axios.get("http://localhost:3008/data").then((response) =>
      this.setState({
        asset: response.data,
      })
    );
  }

  componentDidUpdate() {
    this.refreshList();
  }

  handlerModal = () => {
    return (
      <EditAssetModal
        show={this.state.editModalShow}
        onHide={this.editModalClose}
      />
    );
  };

  renderTableData = () => {
    const editModalClose = () => this.setState({ addModalShow: false });

    return this.state.asset.map((asset, index) => {
      //const dibawah ini sesuai nama field di database
      const { No, Nama, Merk, Tipe, User, Place, Kode } = asset;

      return (
        <tr key={No}>
          <td>{index + 1}</td>
          <td>{Nama}</td>
          <td>{Merk}</td>
          <td>{Tipe}</td>
          <td>{User}</td>
          <td>{Place}</td>
          <td>{Kode}</td>
          <td>
            <button
              type="button"
              className="btn btn-info"
              title="Edit data Asset"
              onClick={() => this.setState({ editModalShow: true })}
            >
              <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
            </button>
            <EditAssetModal
              show={this.state.editModalShow}
              onHide={editModalClose}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button
              type="button"
              className="btn btn-danger"
              title="Hapus data Asset"
            >
              <i className="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    let addModalClose = () => this.setState({ addModalShow: false });

    return (
      <div>
        <h1 id="title">List Asset</h1>
        <hr></hr>
        <ButtonToolbar>
          <Button
            id="addNew"
            type="button"
            className="btn btn-primary"
            onClick={() => this.setState({ addModalShow: true })}
          >
            Add Asset
          </Button>

          <AddAssetModal
            show={this.state.addModalShow}
            onHide={addModalClose}
          />
        </ButtonToolbar>

        <table id="asset" className="table">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Nama</th>
              <th>Merk</th>
              <th>Type</th>
              <th>User</th>
              <th>Ditempatkan di</th>
              <th>Kode Asset</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="body">{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}

export default List;
