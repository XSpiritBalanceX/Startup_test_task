import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import Icon from "./Icon";

const EmailNotification = () => {
  const [showNotification, setShow] = useState<boolean>(true);
  const handleCloseNotification = () => {
    setShow((state) => {
      return !state;
    });
  };

  return (
    <React.Fragment>
      {showNotification && (
        <div className="informWindow">
          <p>Ваш email не подтвержден. Пожалуйста перейдите в почту.</p>
          <Button onClick={handleCloseNotification}>
            <Icon name="close" />
          </Button>
          <NavLink to={"/"}>Прислать подтверждение еще раз</NavLink>
        </div>
      )}
    </React.Fragment>
  );
};

export default EmailNotification;
