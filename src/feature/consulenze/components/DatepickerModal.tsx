import React from "react";
import styled from "@emotion/styled";
import { Box, Container, Stack } from "@mui/system";
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

type Props = {
  onBack: () => void;
  onContinue: (param: string) => void;
  userMail: string;
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

const DatepickerModal = ({ onBack, onContinue, userMail }: Props) => {
  const [selectedDate, setSelectedDate] = React.useState<
    Dayjs | undefined | null
  >();
  const [selectedEventId, setSelectEventId] = React.useState<string | null>(
    null,
  );
  const { isMobile } = useResponsive();
  const { onClose } = useModalContext() || {};
  const slots = useCreateCalendarSlots(selectedDate?.toDate().toString());
  const { data: userAppointment, isLoading } =
    useGetAppointmentByMailQuery(userMail);

  const slotsFurbi = React.useMemo(() => {
    if (!slots) return;
    return slots.map((slot) => ({ ...slot, items: slot.items.reverse() }));
  }, [slots]);

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
                direction='row'
                spacing={2}
                justifyContent='center'
                alignItems='center'
              >
                {slotsFurbi && slotsFurbi.length > 0 ? (
                  slotsFurbi.map((slot) => {
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
                                  onClick={() => handleSlotSelection(item.id)}
                                  key={item?.startDate?.dateTime as string}
                                >
                                  {getDataFromCalendar(item?.startDate)?.time} -{" "}
                                  {getDataFromCalendar(item?.endDate)?.time}
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
        </ModalBody>
        <ModalFooter>
          <Container>
            {!isLoading && !isEmpty(userAppointment) ? (
              <Typography color='red.400' variant='caption'>
                Fatti furbo
              </Typography>
            ) : null}
            {customError.value ? (
              <Typography color='red.400' variant='caption'>
                {customError.msg}
              </Typography>
            ) : null}
            <Button
              disabled={deleteLoading || isLoading || !slots}
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
