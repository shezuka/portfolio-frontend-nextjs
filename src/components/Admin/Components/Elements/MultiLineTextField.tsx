import React from "react";
import { Typography } from "@mui/material";
import { useRecordContext } from "react-admin";

const MultiLineTextField = ({ source }: { source: string }) => {
  const record = useRecordContext();
  if (!record || !record[source]) {
    return null;
  }

  return (
    <Typography variant="body1" component="pre">
      {record[source]}
    </Typography>
  );
};

export default MultiLineTextField;
