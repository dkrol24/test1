import React from "react";
import "./EmailRow.css";
import { Checkbox, IconButton } from "@material-ui/core";

import {
  LabelImportantOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import { useHistory } from "react-router-dom";
function EmailRow({ id, title, subject, description, time }) {
  const history = useHistory();
  return (
    <div className="emailRow">
      <div className="emailRowOptions">
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <h3 onClick={() => history.push("/mail")} className="emailRow__title">
        {title}
      </h3>
      <div onClick={() => history.push("/mail")} className="emailRow__message">
        <h4>
          {subject}{" "}
          <span className="emailRow__description">-{description}</span>
        </h4>
      </div>
      <p className="emailRow__time">{time}</p>
    </div>
  );
}

export default EmailRow;
