import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const ModalBody = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: scroll;
`;
