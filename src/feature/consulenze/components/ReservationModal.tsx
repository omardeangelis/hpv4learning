import React from "react"
import { navigate } from "gatsby"
import { RouteComponentProps } from "@reach/router"
import { useSelector, useDispatch } from "react-redux"
import { isEmpty } from "lodash"
import { Modal, ModalContent } from "../../../components/modal"
import { useSteps } from "../../../hook/useSteps"
import WelcomeModal from "./WelcomeModal"
import SuccessModal from "./SuccessModal"
import ProviderModal from "./ProviderModal"
import { ConsulenzeErrorModal } from "./ConsulenzeErrorModal"
import DatepickerModal from "./DatepickerModal"
import InfoModal from "./InfoModal"
import {
  useBookAppointmentMutation,
  useDeleteAppointmentMutation,
  useGetAppointmentByMailQuery,
} from "../../../services/calendar"
import { RootState } from "../../../store"
import { saveSuccessMessage } from "../../../store/reducers/consulenze"

type FormData = {
  email: string
  eventId: string
  nome?: string
  cognome?: string
  professione?: string
  description?: string
}

const initialData = {
  email: ``,
  eventId: ``,
  nome: ``,
  cognome: ``,
  professione: ``,
  description: ``,
}

export const ReservationModal: React.FC<RouteComponentProps> = () => {
  const [formData, setFormData] = React.useState<FormData>(initialData)
  const dispatch = useDispatch()
  const [deleteAppointment] = useDeleteAppointmentMutation()
  const { data: userAppointment } = useGetAppointmentByMailQuery(formData.email)

  const { step, stepIndex, nextStep, prevStep, gotoStep } = useSteps([
    `welcome` as const,
    `provider` as const,
    `datepicker` as const,
    `info` as const,
    `success` as const,
    `error` as const,
  ])

  const onContinue = React.useCallback(
    (values: Partial<FormData>) => {
      setFormData({ ...formData, ...values })
      nextStep()
    },
    [nextStep, formData]
  )
  const { provider } = useSelector((store: RootState) => store.consulenza)
  const [bookAppointment, { data, error }] = useBookAppointmentMutation()

  const onSumbit = React.useCallback(
    async (values: Partial<FormData>) => {
      setFormData({ ...formData, ...values })
      try {
        await bookAppointment({
          ...formData,
          ...values,
          shouldSendMail: provider === `manual`,
        })
        if (userAppointment && !isEmpty(userAppointment)) {
          try {
            await deleteAppointment(userAppointment[0].id)
          } catch (errors) {
            // eslint-disable-next-line no-console
            console.log(errors)
          }
        }
      } catch (err) {
        gotoStep(`error`)
      }
    },
    [
      formData,
      bookAppointment,
      provider,
      userAppointment,
      deleteAppointment,
      gotoStep,
    ]
  )

  React.useEffect(() => {
    if (data) {
      if (data.hangoutLink)
        localStorage.setItem(`success_data`, data.hangoutLink)
      dispatch(
        saveSuccessMessage({
          date: data.start,
          hangoutLink: data.hangoutLink,
        })
      )
      gotoStep(`success`)
    }
    if (error) {
      gotoStep(`error`)
    }
  }, [data, data?.start, data?.hangoutLink, dispatch, gotoStep, error])

  const handleClose = React.useCallback(() => {
    navigate(-1)
  }, [])

  const handleContinue = React.useCallback(
    (eventId: string) => {
      setFormData({ ...formData, eventId })
      nextStep()
    },
    [nextStep, formData]
  )

  const renderModalContent = React.useCallback(() => {
    switch (step) {
      case `welcome`:
        return <WelcomeModal onContinue={nextStep} />
      case `provider`:
        return <ProviderModal onContinue={onContinue} onBack={prevStep} />
      case `datepicker`:
        return (
          <DatepickerModal
            userMail={formData.email}
            onContinue={handleContinue}
            onBack={prevStep}
          />
        )
      case `info`:
        return <InfoModal onBack={prevStep} onContinue={onSumbit} />
      case `success`:
        return <SuccessModal />
      case `error`:
        return <ConsulenzeErrorModal onContinue={() => gotoStep(`welcome`)} />
      default:
        // eslint-disable-next-line react/jsx-no-useless-fragment
        return <></>
    }
  }, [
    formData.email,
    gotoStep,
    handleContinue,
    nextStep,
    onContinue,
    onSumbit,
    prevStep,
    step,
  ])

  return (
    <Modal stepIndex={stepIndex} onClose={handleClose}>
      <ModalContent>{renderModalContent()}</ModalContent>
    </Modal>
  )
}
