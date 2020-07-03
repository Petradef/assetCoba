import React, { Component } from "react";
import FormEdit from "./FormEdit";
import { Modal, Button, Row, Col } from "react-bootstrap";
import List from "./List";

class EditAssetModal extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Asset
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <Row>
              <Col sm={6}>
                {/* modul Form */}
                <FormEdit />
              </Col>
            </Row>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variants="danger" onClick={this.props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default EditAssetModal;
