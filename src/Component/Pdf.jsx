import  { useState } from "react";

import { Modal } from "react-bootstrap";

import PDFViewer from "pdf-viewer-reactjs";


export default function Pdf () {
  const [modal, setModal] = useState(false);

  const handleToggle = () => setModal(!modal);

  return (
    <div>
      <span onClick={handleToggle}>PDF Notes</span>
      {/* <button style={{border:"none", backgroundColor:"transparent",color:"wheat"}} onClick={handleToggle}>PDF Notes</button> */}

      <Modal show={modal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <PDFViewer
            document={{ url: "../public/pdf.pdf" }}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}