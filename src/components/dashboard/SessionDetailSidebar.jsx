import React, { useEffect, useState } from "react";
import {
  Bell,
  EnvelopeSimpleOpen,
  PencilSimple,
  Phone,
  Trash,
  UserCircle,
  X,
} from "@phosphor-icons/react";
import Button from "../Button";
import SessionDetailModal from "./SessionDetailModal";
import RescheduleSidebar from "./RescheduleSidebar";
import EditSessionSidebar from "./EditSessionSidebar";

const ModalWrapper = ({ isVisible, title, children, onClose }) => {
  return (
    isVisible && (
      <SessionDetailModal title={title} onClose={onClose}>
        {children}
      </SessionDetailModal>
    )
  );
};

const SessionDetailSidebar = ({ isSessionDetails, setIsSessionDetails }) => {
  const [modalState, setModalState] = useState({
    isSessionCanceled: false,
    isCancellationFees: false,
    isUpdatePaymentSession: false,
    isTerminatingClient: false,
    isReminder: false, // Add state for Reminder modal
  });

  const [isRescheduleSession, setIsRescheduleSession] = useState(false);
  const [isEditSession, setIsEditSession] = useState(false);

  // stop body scrollig
  useEffect(() => {
    document.body.style.overflow = isSessionDetails ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isSessionDetails]);

  const closeModal = () =>
    setModalState({
      isSessionCanceled: false,
      isCancellationFees: false,
      isUpdatePaymentSession: false,
      isTerminatingClient: false,
      isReminder: false, // Close all modals
    });

  const handleSessionOff = () =>
    setModalState({ isSessionCanceled: false, isCancellationFees: true });

  const handleCancellationFeesResponse = () =>
    setModalState({ isCancellationFees: false, isUpdatePaymentSession: true });

  const handleCancelAllSessions = () =>
    setModalState({ isSessionCanceled: false, isTerminatingClient: true });

  const openReminderModal = () =>
    setModalState({ ...modalState, isReminder: true });

  return (
    <div
      className={`fixed w-full h-full bg-black/20 top-0 left-0 transition-opacity z-[999] ${
        isSessionDetails ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div
        className={`max-w-[416px] w-full bg-white absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 max-h-[657px] h-full transition-opacity duration-300 rounded-base overflow-hidden ${
          isSessionDetails && !Object.values(modalState).some((value) => value)
            ? "opacity-100"
            : "opacity-0"
        }`}
      >
        <div className="relative h-full flex flex-col">
          {/* Sidebar Header */}
          <div className="px-5 py-3.5 shadow-[0px_4px_12px_0px_#0000000F] flex justify-between items-center">
            <h3 className="text-lg font-medium text-[#242424]">
              Session Details
            </h3>
            <div className="flex items-center gap-5">
              <button>
                <PencilSimple
                  size={20}
                  onClick={() => setIsEditSession(!isEditSession)}
                />
              </button>
              <button onClick={openReminderModal}>
                {" "}
                {/* Open Reminder modal */}
                <Bell size={20} />
              </button>
              <button
                onClick={() => setModalState({ isSessionCanceled: true })}
              >
                <Trash size={20} />
              </button>
              <button onClick={() => setIsSessionDetails(false)}>
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Sidebar Content */}
          <div className="flex-1 overflow-y-auto px-5 py-2.5">
            <h4 className="text-sm/5 font-medium text-gray-400">
              Patient Name
            </h4>
            <ul className="space-y-15px pt-2 text-sm/5">
              <li className="flex gap-3 items-center text-primary">
                <UserCircle size={20} /> Abhi Sojitra (Age-43)
              </li>
              <li className="flex gap-3 items-center text-primary">
                <EnvelopeSimpleOpen size={20} /> abhi@gmail.com
              </li>
              <li className="flex gap-3 items-center text-primary">
                <Phone size={20} /> +91 25222 125236
              </li>
              <li className="flex gap-3 items-center text-primary">
                <Bell size={20} /> 20 Minutes before
              </li>
              <li className="text-gray-400">
                Payment: <span className="text-primary">Paid on Time</span>
              </li>
              <li className="text-gray-400">
                Session Time:{" "}
                <span className="text-primary">2.00PM, 10Min</span>
              </li>
            </ul>
            <hr className="border-gray-200 my-15px" />
            <h4 className="text-sm/5 font-medium text-gray-400">
              Unpaid Session Payment
            </h4>
            <ul className="space-y-15px pt-2 text-sm/5">
              <li className="flex items-center justify-between text-primary">
                <p>10th July,2024</p>
                <span className="py-[2px] px-[9px] inline-block bg-red-200 text-red-500 rounded-[5px] text-sm/5">
                  Unpaid
                </span>
              </li>
              <li className="flex items-center justify-between text-primary">
                <p>7th July,2024</p>
                <span className="py-[2px] px-[9px] inline-block bg-red-200 text-red-500 rounded-[5px] text-sm/5">
                  Unpaid
                </span>
              </li>
            </ul>
          </div>

          {/* Sidebar Footer */}
          <div className="bg-white shadow-[0px_4px_43.4px_0px_#0000001A] px-5 py-2.5 grid grid-cols-2 gap-5 z-10">
            <Button
              variant="outlined"
              onClick={() => setIsRescheduleSession(!isRescheduleSession)}
            >
              Reschedule
            </Button>
            <Button variant="filled">Start session</Button>
          </div>
        </div>
      </div>
      {/* Session Canceled */}
      <ModalWrapper
        isVisible={modalState.isSessionCanceled}
        title="Session Canceled"
        onClose={closeModal}
      >
        <p className="text-gray-500 text-sm/5 pt-30px">
          Are you sure you want to mark this session as canceled? This action
          will notify the customer and update your records accordingly.
        </p>
        <div className="grid grid-cols-2 gap-3.5 pt-[50px]">
          <Button variant="outlined" onClick={handleCancelAllSessions}>
            Cancel All Sessions
          </Button>
          <Button variant="filled" onClick={handleSessionOff}>
            Session Off
          </Button>
        </div>
      </ModalWrapper>
      {/* Cancellation Fees */}
      <ModalWrapper
        isVisible={modalState.isCancellationFees}
        title="Is There a Cancellation Fees"
        onClose={closeModal}
      >
        <div className="grid grid-cols-2 gap-3.5 pt-[50px]">
          <Button variant="outlined" onClick={handleCancellationFeesResponse}>
            No
          </Button>
          <Button variant="filled" onClick={handleCancellationFeesResponse}>
            Yes
          </Button>
        </div>
      </ModalWrapper>
      {/* Update Payment Session */}
      <ModalWrapper
        isVisible={modalState.isUpdatePaymentSession}
        title="Update Payment Session"
        onClose={closeModal}
      >
        <p className="text-gray-500 text-sm/5 pt-30px">
          We are calling off this session. After you've got it, update the same
          information in your payment records.
        </p>
        <Button variant="filled" className="w-full col-span-2 mt-[50px]">
          Okay, got it
        </Button>
      </ModalWrapper>
      {/* terminating the client */}
      <ModalWrapper
        isVisible={modalState.isTerminatingClient}
        title="Are you terminating the client"
        onClose={closeModal}
      >
        <p className="text-gray-500 text-sm/5 pt-30px">
          This action will end all services with the client. Please confirm to
          proceed.
        </p>
        <div className="grid grid-cols-2 gap-3.5 pt-[50px]">
          <Button variant="outlined">No</Button>
          <Button variant="filled">Yes</Button>
        </div>
      </ModalWrapper>
      {/* Reminder */}
      <ModalWrapper
        isVisible={modalState.isReminder}
        title="Reminder"
        onClose={closeModal}
      >
        <div className="pt-30px space-y-2.5">
          <label className="flex justify-between items-center text-sm/5 text-gray-500">
            Session Reminder
            <input type="radio" name="reminder" className="w-4.5 h-4.5" />
          </label>
          <label className="flex justify-between items-center text-sm/5 text-gray-500">
            Payment Session
            <input type="radio" name="reminder" className="w-4.5 h-4.5" />
          </label>
          <label className="flex justify-between items-center text-sm/5 text-gray-500">
            Set Both
            <input type="radio" name="reminder" className="w-4.5 h-4.5" />
          </label>
        </div>
        <div className="flex items-center gap-3.5 pt-[50px]">
          <Button variant="outlined" className={`w-full !px-0`}>
            Cancel
          </Button>
          <Button variant="filled" className={`w-full`}>
            Remind
          </Button>
        </div>
      </ModalWrapper>

      {/* Reschedule Session sidebar */}
      <RescheduleSidebar
        isRescheduleSession={isRescheduleSession}
        setIsRescheduleSession={setIsRescheduleSession}
      />

      {/* Edit Session sidebar */}
      <EditSessionSidebar
        isEditSession={isEditSession}
        setIsEditSession={setIsEditSession}
      />
    </div>
  );
};

export default SessionDetailSidebar;
