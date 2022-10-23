import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";

export const ModalHeader = styled(Box)<{ hasborder?: true }>`
  position: relative;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid;

  & * {
    margin: auto 12px auto 12px;
  }

  @media screen and (min-width: 768px) {
    height: 56px;
    & * {
      margin: auto 20px auto 20px;
    }
  }
  border-bottom-color: ${({ hasborder }) =>
    hasborder ? "#E4E7EC" : "transparent"};
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
