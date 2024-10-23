// import Dashboard from "@/app/dashboard/page";

const endpoints = {
  login: "/therapist/signup",
  createTherapist: "/therapist/create",
  timeZones: "/therapist/timezones",
  therapistNotification: "/notification/therapist/all",
  sessions: {
    schedules: `/therapist/schedules`,
    reschedule: `/therapist/reschedule`,
    cancelSchedule: `/therapist/schedule/cancel`,
    recreatePaymentLink: `/therapist/payment/recreate`,
    scheduleCount: `/therapist/schedules/count`,
    scheduleReminder: `/therapist/schedule/reminder`,
  },
  clients: {
    clients: `/therapist/clients`,
    clientCount: `/therapist/client/count`,
    getClientById: `/client/getClientById`,
    putClientById: `/therapist/client`,
  },
  payments: {
    payments: `/therapist/payments`,
    therapistPaymentStats: `/therapist/payment/stats`,
    sendReminder: `/therapist/reminder/send`,
    searchPayment: `/therapist/payment/search`,
  },
  paymentTracker: {
    getAllPayment: "/therapist/paytracker/get/all",
    deletePayment: "/therapist/paytracker/delete",
    getPaymentsByTherapist: "/therapist/paytracker/get",
    changePaytrackerStatus: "/therapist/paytracker/change/status",
    getStats: "/therapist/paytracker/get/stats",
    getClientsOfTherapist: "therapist/paytracker/get/clients",
    getPayTrackerEmuns: "therapist/paytracker/enums",
    chargeSession: "/therapist/paytracker/charge/session",
    sendReminder: "/therapist/paytracker/send/reminder",
    updateAmount: "/therapist/paytracker/update/amount",
  },
  dashboard: {
    createSchedule: "/therapist/schedules/create",
    getDashboardStats: "/therapist/dashboard/stats",
  },

  setting: {
    therapistSettingData: "/therapist/data",
    uploadProfile: "/therapist/profile/upload",
    therapistVpaUpdate: "/therapist/vpa/update",
    paymentMenuUpdate: "/therapist/menu/update",
    calendarResync: "/therapist/calendar/resync",
    subscription: {
      paymentHistory: "/therapist/subscription/active/get",
    },
  },
  verifyTherapist:"therapist/verify-therapist",
  addPractice:"therapist/add-pratice"
};

export default endpoints;
