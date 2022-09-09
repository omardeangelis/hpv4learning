import { Box } from "@mui/system";
import { navigate } from "gatsby";
import React from "react";
import { BottomBanner, RoundedButton } from "../../components/layout";
import {
  CardsSection,
  Hero,
  IconSection,
  ReviewSection,
} from "../consulenze/components";
import { ConsulenzeProvider } from "../consulenze/context";
// import {
//   useGetAllAvailableCalendarsQuery,
//   useGetAppointmentByMailQuery,
// } from "../../store/services/calendar";

export const ConsulenzeLayout = () => {
  const openModal = React.useCallback(
    () => navigate("/consulenze/prenota/"),
    []
  );

  const context = React.useMemo(() => ({ openModal }), [openModal]);
  // const [createNewResource, {data, isLoading, isError}] = useCreateNewResourceMutation()
  // const { data, isLoading } = useGetAllAvailableCalendarsQuery();
  // const { data, isLoading } = useGetAppointmentByMailQuery();
  // console.log(data, isLoading);

  // const prova = React.useCallback(() => {
  //   createNewResource({
  //     title: 'Gianni Cafone',
  //     body: "E' veramente un graaaaeeendee",
  //     userId: 943268632843864
  //   })
  // }, [createNewResource])

  return (
    <ConsulenzeProvider value={context}>
      <Box mt='-72px'>
        <Hero />
        <Box
          sx={{
            backgroundImage:
              "linear-gradient(180deg, #FFFFFF 0%, #F8F8F8 48.96%, #FFFFFF 100%)",
          }}
        >
          <Box
            sx={{
              mt: {
                xs: "48px",
                lg: "144px",
              },
            }}
          >
            <IconSection />
          </Box>
          <Box
            sx={{
              mt: {
                xs: "48px",
                lg: "144px",
              },
            }}
          >
            <CardsSection />
          </Box>
          <Box
            sx={{
              mt: {
                xs: "48px",
                lg: "144px",
              },
            }}
          >
            <ReviewSection />
          </Box>
          <Box
            sx={{
              mt: {
                xs: "48px",
                lg: "144px",
              },
            }}
          >
            <BottomBanner
              title='Facciamo due chiacchiere, è gratis'
              sx={{
                backgroundColor: "purple.A100",
              }}
            >
              <RoundedButton
                size='large'
                variant='contained'
                color='primary'
                onClick={openModal}
              >
                Prenota una call
              </RoundedButton>
            </BottomBanner>
          </Box>
        </Box>
      </Box>
    </ConsulenzeProvider>
  );
};
