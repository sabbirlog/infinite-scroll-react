import * as React from "react";
import Chip from "@mui/material/Chip";

const checkType = (type: string) => {
  if (type === "tech") {
    return "secondary";
  } else if (type === "education") {
    return "info";
  } else {
    return "warning";
  }
};

const CustomChip = ({
  label,
  type,
  sx,
}: {
  label: string;
  type: string;
  sx?: any;
}) => {
  return <Chip sx={sx} label={label} color={checkType(type)} />;
};

export default CustomChip;
