import React, { Component } from "react";
import FormAdd from "./FormAdd";
import { Modal, Button, Row, Col } from "react-bootstrap";

class AddAssetModal extends Component {
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
            Add Asset
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <Row>
              <Col sm={6}>
                {/* modul Form */}
                <FormAdd />
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

export default AddAssetModal;
