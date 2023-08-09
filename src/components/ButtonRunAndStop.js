import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";

const ButtonRunAndStop = (props) => {
  return (
    <div className="col-12 d-flex justify-content-center">
      <Button type="primary" onClick={() => props.run()}>
        Gửi tin
      </Button>
      <Button
        type="primary"
        danger
        className="ms-2"
        onClick={() => props.stop()}
      >
        Dừng
      </Button>
    </div>
  );
};

ButtonRunAndStop.propTypes = {};

export default ButtonRunAndStop;
