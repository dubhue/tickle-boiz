import * as React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

const ToggleWrap = styled.div`
  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.2s;
    transition: 0.2s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.2s;
    transition: 0.2s;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

const ToggleSwitch = ({ label, toggle, setter }) => {
  return (
    <ToggleWrap>
      <Row>
        <Col xs="auto">
          <label className="switch">
            <input type="checkbox" checked={toggle} onChange={setter} />
            <span className="slider round"></span>
          </label>
        </Col>
        <Col>
          <div style={{ marginLeft: ".5rem" }}>{label}</div>
        </Col>
      </Row>
    </ToggleWrap>
  );
};

export default ToggleSwitch;
