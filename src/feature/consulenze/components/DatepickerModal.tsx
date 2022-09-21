import React from "react";
import styled from "@emotion/styled";
import { Box, Stack } from "@mui/system";
import {
  ModalHeader,
  ModalBackButton,
  ModalCloseButton,
  ModalTitle,
  ModalBody,
  ModalTypography,
  ModalStepper,
} from "../../../components/modal";
import { Button, Typography, FormControl, TextField } from "@mui/material";
import { DatePicker, MobileDatePicker } from "@mui/x-date-pickers";
import { useResponsive } from "../../../hook/useResponsive";
import { useModalContext } from "../../../components/modal/context";
import { reservationModalLabels } from "../utils/constants";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { useCreateCalendarSlots } from "../hook/useCreateCalendarSlots";

type Props = {
  onBack: () => void;
  onContinue: () => void;
};

const StyledBox = styled(Box)`
  width: 84px;
  height: 40px;
  border: 1px solid var(--gray-300);
  border-radius: 8px;
  color: var(--gray-600);
  font-size: 10px;
  font-weight: 400;
  line-height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    border: 1px solid var(--purple-400);
  }

  @media screen and (min-width: 768px) {
    width: 115px;
    height: 45px;
  }
`;

const DatepickerModal = ({ onBack, onContinue }: Props) => {
  const { isMobile } = useResponsive();
  const { onClose } = useModalContext() || {};
  const slots = useCreateCalendarSlots();
  console.log(slots);

  // data scelta nel datepicker
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>();

  const handleChange = (date: Dayjs | null) => {
    setSelectedDate(date);
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ModalHeader hasBorder>
          <ModalBackButton onBack={onBack} />
          {!isMobile ? (
            <ModalTitle>Prenota il tuo appuntamento</ModalTitle>
          ) : null}
          {onClose ? <ModalCloseButton onClose={onClose} /> : null}
        </ModalHeader>
        <ModalBody>
          <Box
            px='12px'
            mb={{ xs: "auto", lg: "120px" }}
            alignItems='center'
            justifyContent='center'
          >
            <Box px={{ xs: "10px", lg: "70px" }} pt='38px'>
              <ModalStepper labels={reservationModalLabels} />
            </Box>
            <Box maxWidth='500px' mt='20px'>
              <Stack
                direction={{ xs: "column", lg: "row" }}
                spacing={2}
                justifyContent='center'
                alignItems='center'
              >
                {/* {slots &&
                  slots.map((date) => {
                    return (
                      <Box>
                        <Typography
                          fontSize='12px'
                          lineHeight='18px'
                          fontWeight={500}
                          textAlign={isMobile ? "left" : "center"}
                          mb={isMobile ? "3px" : "6px"}
                        >
                          {date}
                        </Typography>
                        <Stack
                          direction={{ xs: "row", lg: "column" }}
                          spacing={1}
                        >
                          <StyledBox>18.30 - 19.00</StyledBox>
                          <StyledBox>19.00 - 19.30</StyledBox>
                          <StyledBox>19.30 - 20.00</StyledBox>
                          <StyledBox>20.00 - 20.30</StyledBox>
                        </Stack>
                      </Box>
                    );
                  })} */}
              </Stack>
            </Box>
            <Box mb={{ xs: "32px", lg: "18px" }} mt='38px'>
              {isMobile ? (
                <Typography
                  fontSize='20px'
                  lineHeight='24px'
                  fontWeight={600}
                  textAlign='center'
                >
                  Prenota il tuo appuntamento
                </Typography>
              ) : null}
              <ModalTypography mt={{ xs: "10px", lg: "0px" }} maxWidth='480px'>
                Scegli uno slot da 30 minuti tra quelli disponibili, oppure
                scegli una data e vedi i prossimi 12 eventi disponibili
              </ModalTypography>
            </Box>

            <FormControl
              sx={{
                width: "100%",
              }}
            >
              {isMobile ? (
                <MobileDatePicker
                  label='Data'
                  inputFormat='DD/MM/YYYY'
                  value={selectedDate}
                  onChange={handleChange}
                  disablePast
                  renderInput={(params) => <TextField {...params} />}
                />
              ) : (
                <DatePicker
                  label='Data'
                  inputFormat='DD/MM/YYYY'
                  value={selectedDate}
                  onChange={handleChange}
                  disablePast
                  renderInput={(params) => <TextField {...params} />}
                />
              )}
            </FormControl>
          </Box>
          <Box
            px={{ xs: "12px", lg: "65px" }}
            mb={{ xs: "18px", lg: "22px" }}
            sx={{ position: "absolute", bottom: "0", width: "100%" }}
          >
            <Button
              onClick={onContinue}
              variant='contained'
              sx={{
                width: "100%",
              }}
            >
              Avanti
            </Button>
          </Box>
        </ModalBody>
      </LocalizationProvider>
    </>
  );
};

export default DatepickerModal;
