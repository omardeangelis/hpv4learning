import styled from "@emotion/styled";
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

  @media screen and (min-width: 1024px) {
    height: 56px;
    & * {
      margin: auto 20px auto 20px;
    }
  }
`;
