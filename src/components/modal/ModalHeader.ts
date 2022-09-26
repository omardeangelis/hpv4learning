import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export const ModalHeader = styled(Box)<{ hasBorder?: true }>`
  position: relative;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${(props) => (props.hasBorder ? "1px solid #E4E7EC" : "none")};

  & * {
    margin: auto 12px auto 12px;
  }

  @media screen and (min-width: 768px) {
    height: 56px;
    & * {
      margin: auto 20px auto 20px;
    }
  }
`;

export const ModalTitle = styled(Typography)`
  font-size: 24px;
  line-height: 36px;
  font-weight: 600;
  color: black;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  z-index: 0;
`;
