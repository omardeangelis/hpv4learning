import React from "react";
import styled from "@emotion/styled";
import { Box, Container, css, Stack } from "@mui/system";
import {
  ModalHeader,
  ModalBackButton,
  ModalCloseButton,
  ModalTitle,
  ModalBody,
  ModalTypography,
  ModalStepper,
  Spinner,
  ModalFooter,
} from "../../../components/modal";
import { Button, Typography, FormControl, TextField } from "@mui/material";
import { DatePicker, MobileDatePicker } from "@mui/x-date-pickers";
import { useResponsive } from "../../../hook/useResponsive";
import { useModalContext } from "../../../components/modal/context";
import { reservationModalLabels } from "../utils/constants";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import { useCreateCalendarSlots } from "../hook/useCreateCalendarSlots";
import { isEmpty } from "lodash";
import { getDataFromCalendar } from "../utils/helpers";
import {
  useDeleteAppointmentMutation,
  useGetAppointmentByMailQuery,
} from "../../../services/calendar";
import * as Yup from "yup";

type Props = {
  onBack: () => void;
  onContinue: (param: string) => void;
  userMail: string;
};

const StyledBox = styled(Box)<{
  appointmentStatus?: string;
  isMobile: boolean;
}>(
  ({ isMobile, appointmentStatus }) => ({
    maxWidth: isMobile ? "84px" : "115px",
    width: "100%",
    height: isMobile ? "40px" : "45px",
    border:
      appointmentStatus === "booked" ? "none" : "1px solid var(--gray-300)",
    borderRadius: "8px",
    color:
      appointmentStatus === "booked" ? "var(--gray-500)" : "var(--gray-600)",
    backgroundColor:
      appointmentStatus === "booked" ? "var(--gray-300)" : "none",
    textDecoration: appointmentStatus === "booked" ? "line-through" : "none",
    fontSize: "10px",
    fontWeight: "400",
    lineHeight: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  }),
  css`
    &:hover {
      border: 1px solid var(--purple-400);
    }
  `,
);

const validationSchema = Yup.object().shape({
  date: Yup.date()
    .max(
      new Date(Date.now() + 1000 * 60 * 60 * 24 * 60),
      "Seleziona una data entro 60 giorni da oggi",
    )
    .required("Scegli una data"),
});

const DatepickerModal = ({ onBack, onContinue, userMail }: Props) => {
  const [selectedDate, setSelectedDate] = React.useState<
    Dayjs | undefined | null
  >();
  const [dateError, setDateError] = React.useState<string>("");
  const [selectedEventId, setSelectEventId] = React.useState<string | null>(
    null,
  );
  const { isMobile } = useResponsive();
  const { onClose } = useModalContext() || {};
  const slots = useCreateCalendarSlots(selectedDate?.toDate().toString());
  const { data: userAppointment, isLoading } =
    useGetAppointmentByMailQuery(userMail);

  const [customError, setCustomError] = React.useState({
    msg: "",
    value: false,
  });

  const handleChange = (newValue?: Dayjs | null) => {
    setSelectedDate(newValue);
  };

  const handleSlotSelection = React.useCallback((id: string) => {
    setSelectEventId(id);
    setCustomError({
      msg: "",
      value: false,
    });
  }, []);

  const [deleteAppointment, { isLoading: deleteLoading }] =
    useDeleteAppointmentMutation();

  const handleContinue = React.useCallback(async () => {
    if (!selectedEventId) {
      setCustomError({ msg: "scegli il giorno", value: true });
      return;
    }
    if (userAppointment && !isEmpty(userAppointment)) {
      try {
        await deleteAppointment(userAppointment[0].id);
      } catch (error) {
        console.log(error);
      }
    }

    if (!deleteLoading) onContinue(selectedEventId);
  }, [
    userAppointment,
    userAppointment?.[0]?.id,
    selectedEventId,
    deleteLoading,
    deleteAppointment,
  ]);

  React.useEffect(() => {
    setDateError("");
    if (selectedDate)
      validationSchema
        .validate({ date: selectedDate })
        .catch((err) => setDateError(err.errors[0]));
  }, [selectedDate]);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ModalHeader hasborder>
          <ModalBackButton onBack={onBack} />
          {!isMobile ? (
            <ModalTitle>Prenota il tuo appuntamento</ModalTitle>
          ) : null}
          {onClose ? <ModalCloseButton onClose={onClose} /> : null}
        </ModalHeader>
        <ModalBody>
          <Stack
            direction='column'
            px='12px'
            mb={{ xs: "auto", lg: "70px" }}
            alignItems='center'
            justifyContent='center'
          >
            <Box
              px={{ xs: "10px", lg: "70px" }}
              width={{ xs: "400px", lg: "600px" }}
              pt='38px'
            >
              <ModalStepper labels={reservationModalLabels} />
            </Box>
            <Box maxWidth='500px' mt='20px'>
              <Stack
                direction='row'
                spacing={2}
                justifyContent='center'
                alignItems='flex-start'
              >
                {slots && slots.length > 0 ? (
                  slots.map((slot) => {
                    return (
                      <Box key={slot.date}>
                        <Typography
                          fontSize='12px'
                          lineHeight='18px'
                          fontWeight={500}
                          textAlign={isMobile ? "left" : "center"}
                          mb={isMobile ? "3px" : "6px"}
                        >
                          {slot.date}
                        </Typography>
                        <Stack direction='column' spacing={1}>
                          {slot.items && !isEmpty(slot.items)
                            ? slot.items.map((item) => (
                                <StyledBox
                                  isMobile={isMobile}
                                  appointmentStatus={item.appointemntStatus}
                                  onClick={() => handleSlotSelection(item.id)}
                                  key={item?.startDate?.dateTime as string}
                                >
                                  <Box px='6px'>
                                    <Typography
                                      sx={{
                                        fontSize: { xs: "10px", md: "12px" },
                                      }}
                                    >
                                      {
                                        getDataFromCalendar(item?.startDate)
                                          ?.time
                                      }{" "}
                                      -{" "}
                                      {getDataFromCalendar(item?.endDate)?.time}
                                    </Typography>
                                  </Box>
                                </StyledBox>
                              ))
                            : null}
                        </Stack>
                      </Box>
                    );
                  })
                ) : (
                  <Spinner />
                )}
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
                maxWidth: "480px",
              }}
            >
              {isMobile ? (
                <MobileDatePicker
                  label='Data'
                  inputFormat='DD/MM/YYYY'
                  value={selectedDate}
                  onChange={handleChange}
                  disablePast
                  renderInput={(params) => (
                    <TextField name='date' {...params} />
                  )}
                />
              ) : (
                <DatePicker
                  label='Data'
                  inputFormat='DD/MM/YYYY'
                  value={selectedDate}
                  onChange={handleChange}
                  disablePast
                  renderInput={(params) => (
                    <TextField name='date' {...params} />
                  )}
                />
              )}
              {dateError ? (
                <Typography variant='caption' color='red.400'>
                  {dateError}
                </Typography>
              ) : null}
            </FormControl>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Container>
            {!isLoading && !isEmpty(userAppointment) ? (
              <Typography color='red.400' variant='caption'>
                Hai già un appuntamento prenotato, controlla il calendario
              </Typography>
            ) : null}
            {customError.value ? (
              <Typography color='red.400' variant='caption'>
                {customError.msg}
              </Typography>
            ) : null}
            <Button
              disabled={
                deleteLoading || isLoading || !slots || !selectedEventId
              }
              onClick={handleContinue}
              variant='contained'
              sx={{
                width: "100%",
              }}
            >
              Avanti
            </Button>
          </Container>
        </ModalFooter>
      </LocalizationProvider>
    </>
  );
};

export default DatepickerModal;
