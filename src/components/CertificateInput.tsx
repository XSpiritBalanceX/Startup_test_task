import React, { useState } from "react";
import { Col, Form, Button, Row } from "react-bootstrap";

const CertificateInput = () => {
  const [picCertificate, setPicCertificate] = useState<File | null | undefined>(
    null
  );
  const [showPicCertificate, setShowPicCertificate] = useState<
    string | ArrayBuffer | null
  >(null);

  const handleCertificate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setPicCertificate(files?.item(0));
    let reader = new FileReader();
    reader.onloadend = () => {
      setShowPicCertificate(reader.result);
    };
    reader.readAsDataURL(files?.item(0)!);
  };

  const handleDeleteCertificate = () => {
    setPicCertificate(null);
    setShowPicCertificate(null);
  };
  return (
    <React.Fragment>
      <Col className="certificateInput">
        <p>Загрузите сертификат/диплом</p>
        {!picCertificate && (
          <Form.Group className="roundButton">
            <Form.Label htmlFor="certificate">
              <i className="bi bi-plus"></i>
            </Form.Label>
            <Form.Control
              type="file"
              id="certificate"
              onChange={handleCertificate}
            />
            <span>Формат JPG, GIF или PNG. Максимальный размер до 800 KB</span>
          </Form.Group>
        )}
        {picCertificate && (
          <Row className="certificateDiv">
            <Col>
              <img src={showPicCertificate as string} alt="certificate" />
            </Col>
            <Col>
              <p>{picCertificate.name}</p>
              <p>{(Number(picCertificate.size) / 1000).toFixed(0)} kB</p>
              <Button onClick={handleDeleteCertificate}>
                <i className="bi bi-x"></i>
              </Button>
            </Col>
          </Row>
        )}
      </Col>
    </React.Fragment>
  );
};

export default CertificateInput;
