import React from "react";
//Material UI
import Container from "@mui/material/Container/Container";
import Icon from "@mui/material/Icon/Icon";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
//Utils
import valueInfo from "../utils/indexInfo";
//Context
import styled from "@emotion/styled";

const CustomBox = styled(Box)`
  strong {
    color: var(--primary-main);
  }
`;

const PureCssStack = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:not(:first-child) {
    margin-top: 16px;
  }
  & > *:not(:first-child) {
    margin-top: 16px;
  }
  @media screen and (min-width: 767px) {
    &:not(:first-child) {
      margin-top: 24px;
    }
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    & > * {
      margin-top: 0px !important;
      &:not(:first-child) {
        margin-left: 24px;
      }
    }
  }
`;

//Sezione Informativa
const IndexInfo = () => {
  const cardsArray = React.useMemo(
    () =>
      Array.from({ length: 2 }, (_, index) => {
        let start = index;
        let end = index + 2;
        return valueInfo.slice(start, end);
      }),
    []
  );

  return (
    <Container maxWidth='lg'>
      <CustomBox>
        <Typography
          component='h2'
          fontWeight={600}
          sx={{
            fontSize: { xs: "29px", lg: "44px" },
            lineHeight: { xs: "34px", lg: "49px" },
          }}
        >
          A chi si rivolge <strong> Hpv 4 Learning</strong>
        </Typography>
        <Box
          component='section'
          sx={{
            mt: {
              xs: "24px",
              lg: "48px",
            },
          }}
        >
          {cardsArray.map((section, index) => {
            return (
              <PureCssStack key={`info-section-${index}`}>
                {section.map((el) => {
                  const { titolo, text, icon } = el;
                  return (
                    <Box
                      component='article'
                      key={titolo}
                      borderRadius='16px'
                      width='100%'
                      sx={{
                        border: "1px solid",
                        borderColor: "primary.100",
                        background: "white",
                      }}
                    >
                      <Box
                        sx={{
                          padding: "24px",
                        }}
                      >
                        <Icon color='primary'>{icon}</Icon>
                        <Box mt='10px'>
                          <Typography
                            component='p'
                            fontWeight={600}
                            sx={{
                              fontSize: "17px",
                              lineHeight: "21px",
                              color: "grey.700",
                            }}
                          >
                            {titolo}
                          </Typography>
                          <Box mt='6px'>
                            <Typography
                              color='textSecondary'
                              sx={{
                                fontSize: "14px",
                                lineHeight: "18px",
                              }}
                            >
                              {text}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
              </PureCssStack>
            );
          })}
        </Box>
      </CustomBox>
    </Container>
  );
};

export default IndexInfo;
