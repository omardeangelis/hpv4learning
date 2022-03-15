import React from "react";
import Project from "./Project";
import { ProjectProps } from "../types/course";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { rowalizer } from "../utils/helpers";

type Props = {
  data: ProjectProps[];
};

const CustomStack = styled(Box)`
  height: 100%;
  & > *:not(:last-of-type) {
    margin-bottom: 24px;
  }

  .row-container {
    & > *:not(:last-of-type) {
      margin-bottom: 24px;
    }
  }
  @media screen and (min-width: 1080px) {
    .row-container {
      display: flex;
      justify-content: space-between;

      & > *:not(:last-of-type) {
        margin-bottom: 0px;
      }
    }
  }
`;

const Projects = ({ data }: Props) => {
  const rows = React.useMemo(() => rowalizer(data, 2), []);
  return (
    <CustomStack>
      {rows.map((row) => {
        return (
          <Box
            className='row-container'
            sx={{
              mb: { xs: "0px", lg: "24px" },
            }}
          >
            {row.map((progetto) => (
              <Box key={progetto.titolo}>
                <Project data={progetto} />
              </Box>
            ))}
          </Box>
        );
      })}
    </CustomStack>
  );
};

export default Projects;
