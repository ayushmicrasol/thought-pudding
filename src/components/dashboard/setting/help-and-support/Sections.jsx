//  Payment Related
export const PaymentRelated = ({ title }) => {
  return (
    <div className="border border-green-600/30 rounded-base py-5 px-15px space-y-15px">
      <h2 className="text-base/6 text-primary font-semibold">{title}</h2>
      <ul className="text-sm/5 text-primary/70 list-disc pl-15px space-y-15px">
        <li>
          This feature will only be available to you once your VPA details have
          been verified. It can take up to an hour to activate the payment
          features on the platform. You can check the status of your activation
          by going to the top right corner of the Dashboard, clicking on
          <span className="font-semibold">
            {` Settings > Payment Setting > Setup
                Payment Method.`}{" "}
          </span>
          Once your VPA is verified, you can start collecting payments from your
          clients.
        </li>
        <li>
          Our completely integrated Online Payments feature is powered by
          Razorpay, it allows multiple modes of transaction for your clients-
          Debit Cards, Net Banking, UPI. We are working on integrating credit
          card and international payments options as well.
        </li>
        <li>
          To enable the tracking of payments, make sure your payment tracker is
          selected. You can check this in{" "}
          <span className="font-semibold">
            {` Settings > Payment Setting> Setup Payments 2.0> Payments 2.0`}{" "}
          </span>
          (Payment Tracker)
        </li>
      </ul>
      <p className="text-sm/5 text-[#FF0000]">
        Make sure to not deselect any other option since it cannot be selected
        again.
      </p>
    </div>
  );
};

// Payment Settings

export const PaymentSettings = () => {
  return (
    <div className="border border-green-600/30 rounded-base py-5 px-15px space-y-15px">
      <h2 className="text-base/6 text-primary font-semibold">
        Payment Settings
      </h2>
      <ul className="text-sm/5 text-primary/70 list-disc pl-15px space-y-15px">
        <li>
          In this section, you can {" "}
          <span className="font-semibold">change or edit your VPA</span> where
          you will receive all session payments. If you wish to pause using this
          feature, you also have the option of switching off payment settings by
          contacting us hello@thoughtpudding.com.
        </li>
      </ul>
    </div>
  );
};

// Payment Tracking v2

export const TrackingV2 = () => {
  return (
    <div className="border border-green-600/30 rounded-base py-5 px-15px space-y-15px">
      <h2 className="text-base/6 text-primary font-semibold">
        Payment Tracking v2
      </h2>
      <p className="text-sm/5 text-primary/70">
        To start tracking payments, go to the Payments tab. The first step is to
        click on the drop-down under the Mark As column and select the status of
        your payment
      </p>
      <ul className="text-sm/5 text-primary/70 list-disc pl-15px space-y-15px">
        <li>Paid: You have received the payment.</li>
        <li>Still Pending: You haven’t received this payment yet.</li>
        <li>
          Paid Delayed: You have received this payment but after the expected
          time period.
        </li>
        <li>
          Free Cancellation:You have cancelled this session but no session
          charge has to be collected.
        </li>
        <li>
          Paid Cancellation: You have canceled this session and received the
          cancellation charge.{" "}
          <span className="text-[#FF0000]">
            Make sure you enter the amount of cancellation received.
          </span>
        </li>
      </ul>
      <p className="text-sm/5 text-primary/70">
        For all pending payments and cancellation charges, you can use the Send
        Reminder button to send reminders to clients.
      </p>
      <div className="space-y-2">
        <p className="text-sm/5 text-primary/70">
          To track the status of your payments , you can use the three cards
          right under the tab bar that will show you -
        </p>
        <ol className="text-sm/5 text-primary/70 list-decimal pl-15px">
          <li>Collected Payments</li>
          <li>Pending Payments</li>
          <li>Total Earnings</li>
        </ol>
        <p className="text-sm/5 text-primary/70">
          These cards will show you your session payments in the past{" "}
          <span className="font-semibold">7 days, 15 days, 30 days</span>
        </p>
      </div>
      <div className="space-y-2">
        <p className="text-sm/5 text-primary/70">
          For further ease, Filters can be used to search for payments by
          clicking the three bars on the right side corner of the table. You can
          filter entries by -
        </p>
        <ol className="text-sm/5 text-primary/70 list-decimal pl-15px">
          <li>Session Date</li>
          <li>Client Name</li>
          <li>Payment Marked As (payment status)</li>
        </ol>
        <p className="text-sm/5 text-primary/70">
          Use these filters to sort your session payments based on particular
          session date, name of your client and even payment status.
        </p>
      </div>
    </div>
  );
};

// Session Related

export const SessionRelated = () => {
  return (
    <div className="border border-green-600/30 rounded-base py-5 px-15px space-y-15px">
      <h2 className="text-base/6 text-primary font-semibold">
        Session Related
      </h2>
      <ol className="text-sm/5 text-primary/70 list-decimal pl-15px">
        <li>
          <p className="pb-15px">
            Here, you can get an overview of all your clients and your schedule
            for the week.
          </p>
          <ul className="text-sm/5 text-primary/70 list-disc space-y-15px">
            <li>
              If you want to send only a session reminder, click the drop-down
              button under Actions and click on Send Reminder.
            </li>
            <li>
              If you want to reschedule a session, click on the{" "}
              <span className="font-semibold">Reschedule</span> button under
              Actions and select the date and time of the new session.
            </li>
            <li>
              If you want to cancel a session, click on the{" "}
              <span className="font-semibold">Cancel</span> button under
              Actions.
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

// Client Organizer
export const ClientOrganizer = () => {
  return (
    <div className="border border-green-600/30 rounded-base py-5 px-15px space-y-15px">
      <h2 className="text-base/6 text-primary font-semibold">
        Client Organizer
      </h2>
      <ol className="text-sm/5 text-primary/70 list-decimal pl-15px space-y-15px">
        <li>
          <p className="pb-15px">
            Here, you can store all preliminary information about your clients
            such as Name, Gender, Age, Phone Number, Email ID, Session Charges,
            Time Zone, and Status.
          </p>
          <ul className="text-sm/5 text-primary/70 list-disc space-y-15px">
            <li>
              <span className="font-semibold">Name:</span> You can store the
              name of your client so that it is easy for you to identify their
              session and payment details.
            </li>
            <li>
              <span className="font-semibold">Age:</span> You can store the age
              of your client here.
            </li>
            <li>
              <span className="font-semibold">Gender:</span> You can store the
              gender of your client here.
            </li>
            <li>
              <span className="font-semibold">Email ID:</span> You can store the
              Email ID of your client here
            </li>
            <li>
              <span className="font-semibold">Default Session Amount:</span> You
              can store the charge of the client's session so you don’t have to
              update the payment amount before sending each link.
            </li>
            <li>
              <span className="font-semibold">Default Time Zone:</span> You can
              store the default time zone of your client so that the session
              reminder can be customized according to their time zone. In case
              you don’t want to use this, we recommend you to set it as your
              default time zone.
            </li>
            <li>
              <span className="font-semibold">Active/Inactive:</span> Here you
              can keep track of your active (ongoing) and inactive (terminated)
              clients by changing their status to active/inactive. If any client
              is tagged as Inactive in this section, their session and payment
              reminders will be switched off
            </li>
          </ul>
        </li>
        <li>
          <p>
            Here, you can also get an individual look into each client’s
            sessions and payments. To view the same, use the Edit
            Client drop-down and click View Sessions/ View Payments.
          </p>
        </li>
      </ol>
    </div>
  );
};
