// navigation start ---------------------------------------------------------------------------
interface IconProps {
  pathFillColor?: string | undefined; // Define the type for pathFillColor
  strokeWidth?: string | number | undefined;
  className?: string | undefined;
  onClick?: (event: object) => void;
  // ... other props if needed
}
// Dashboard;
export const DashboardIcon: React.FC<IconProps> = ({
  pathFillColor,
  ...props
}) => {
  return (
    <svg
      {...props}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.625 3.125H4.875C4.54348 3.125 4.22554 3.2567 3.99112 3.49112C3.7567 3.72554 3.625 4.04348 3.625 4.375V8.125C3.625 8.45652 3.7567 8.77446 3.99112 9.00888C4.22554 9.2433 4.54348 9.375 4.875 9.375H8.625C8.95652 9.375 9.27446 9.2433 9.50888 9.00888C9.7433 8.77446 9.875 8.45652 9.875 8.125V4.375C9.875 4.04348 9.7433 3.72554 9.50888 3.49112C9.27446 3.2567 8.95652 3.125 8.625 3.125ZM8.625 8.125H4.875V4.375H8.625V8.125ZM16.125 3.125H12.375C12.0435 3.125 11.7255 3.2567 11.4911 3.49112C11.2567 3.72554 11.125 4.04348 11.125 4.375V8.125C11.125 8.45652 11.2567 8.77446 11.4911 9.00888C11.7255 9.2433 12.0435 9.375 12.375 9.375H16.125C16.4565 9.375 16.7745 9.2433 17.0089 9.00888C17.2433 8.77446 17.375 8.45652 17.375 8.125V4.375C17.375 4.04348 17.2433 3.72554 17.0089 3.49112C16.7745 3.2567 16.4565 3.125 16.125 3.125ZM16.125 8.125H12.375V4.375H16.125V8.125ZM8.625 10.625H4.875C4.54348 10.625 4.22554 10.7567 3.99112 10.9911C3.7567 11.2255 3.625 11.5435 3.625 11.875V15.625C3.625 15.9565 3.7567 16.2745 3.99112 16.5089C4.22554 16.7433 4.54348 16.875 4.875 16.875H8.625C8.95652 16.875 9.27446 16.7433 9.50888 16.5089C9.7433 16.2745 9.875 15.9565 9.875 15.625V11.875C9.875 11.5435 9.7433 11.2255 9.50888 10.9911C9.27446 10.7567 8.95652 10.625 8.625 10.625ZM8.625 15.625H4.875V11.875H8.625V15.625ZM16.125 10.625H12.375C12.0435 10.625 11.7255 10.7567 11.4911 10.9911C11.2567 11.2255 11.125 11.5435 11.125 11.875V15.625C11.125 15.9565 11.2567 16.2745 11.4911 16.5089C11.7255 16.7433 12.0435 16.875 12.375 16.875H16.125C16.4565 16.875 16.7745 16.7433 17.0089 16.5089C17.2433 16.2745 17.375 15.9565 17.375 15.625V11.875C17.375 11.5435 17.2433 11.2255 17.0089 10.9911C16.7745 10.7567 16.4565 10.625 16.125 10.625ZM16.125 15.625H12.375V11.875H16.125V15.625Z"
        fill={pathFillColor}
      />
    </svg>
  );
};

// Session;
export const SessionIcon: React.FC<IconProps> = ({
  pathFillColor,
  ...props
}) => {
  return (
    <svg
      {...props}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.421 8.33955H10.7582C10.4722 8.33955 10.235 8.10234 10.235 7.8163C10.235 7.53025 10.4722 7.29304 10.7582 7.29304H14.421C14.5598 7.29304 14.6929 7.34817 14.791 7.4463C14.8891 7.54443 14.9443 7.67752 14.9443 7.8163C14.9443 7.95507 14.8891 8.08816 14.791 8.18629C14.6929 8.28442 14.5598 8.33955 14.421 8.33955ZM7.09543 8.86978C6.96287 8.86978 6.83031 8.82095 6.72566 8.7163L6.2024 8.19304C6.00008 7.99071 6.00008 7.65583 6.2024 7.45351C6.40473 7.25118 6.73961 7.25118 6.94194 7.45351L7.09543 7.60699L8.29543 6.40699C8.49775 6.20467 8.83264 6.20467 9.03496 6.40699C9.23729 6.60932 9.23729 6.9442 9.03496 7.14653L7.46519 8.7163C7.36716 8.81445 7.23416 8.86966 7.09543 8.86978ZM14.421 13.2233H10.7582C10.4722 13.2233 10.235 12.9861 10.235 12.7C10.235 12.414 10.4722 12.1768 10.7582 12.1768H14.421C14.5598 12.1768 14.6929 12.2319 14.791 12.33C14.8891 12.4281 14.9443 12.5612 14.9443 12.7C14.9443 12.8388 14.8891 12.9719 14.791 13.07C14.6929 13.1681 14.5598 13.2233 14.421 13.2233ZM7.09543 13.7535C6.96287 13.7535 6.83031 13.7047 6.72566 13.6L6.2024 13.0768C6.00008 12.8744 6.00008 12.5396 6.2024 12.3372C6.40473 12.1349 6.73961 12.1349 6.94194 12.3372L7.09543 12.4907L8.29543 11.2907C8.49775 11.0884 8.83264 11.0884 9.03496 11.2907C9.23729 11.493 9.23729 11.8279 9.03496 12.0302L7.46519 13.6C7.36716 13.6982 7.23416 13.7534 7.09543 13.7535Z"
        fill={pathFillColor}
      />
      <path
        d="M12.593 17.5H8.40698C4.6186 17.5 3 15.8814 3 12.093V7.90698C3 4.1186 4.6186 2.5 8.40698 2.5H12.593C16.3814 2.5 18 4.1186 18 7.90698V12.093C18 15.8814 16.3814 17.5 12.593 17.5ZM8.40698 3.54651C5.1907 3.54651 4.04651 4.6907 4.04651 7.90698V12.093C4.04651 15.3093 5.1907 16.4535 8.40698 16.4535H12.593C15.8093 16.4535 16.9535 15.3093 16.9535 12.093V7.90698C16.9535 4.6907 15.8093 3.54651 12.593 3.54651H8.40698Z"
        fill={pathFillColor}
      />
    </svg>
  );
};

// Payment;
export const PaymentIcon: React.FC<IconProps> = ({
  pathFillColor,
  ...props
}) => {
  return (
    <svg
      {...props}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_482_13565"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="21"
        height="20"
      >
        <rect x="0.5" width="20" height="20" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_482_13565)">
        <path
          d="M11.8958 17L6.5 11.5V10H9.25C9.94444 10 10.5625 9.75347 11.1042 9.26042C11.6458 8.76736 11.9444 8.18056 12 7.5H6V6H11.7083C11.4444 5.51389 11.1007 5.14236 10.6771 4.88542C10.2535 4.62847 9.77778 4.5 9.25 4.5H6V3H15V4.5H12.5C12.6806 4.73611 12.8438 4.96875 12.9896 5.19792C13.1354 5.42708 13.2431 5.69444 13.3125 6H15V7.5H13.5C13.4306 8.625 12.9861 9.57292 12.1667 10.3438C11.3472 11.1146 10.375 11.5 9.25 11.5H8.60417L14 17H11.8958Z"
          fill={pathFillColor}
        />
      </g>
    </svg>
  );
};

// Patient;
export const PatientIcon: React.FC<IconProps> = ({
  pathFillColor,
  ...props
}) => {
  return (
    <svg
      {...props}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.66075 12.3376C10.4984 11.7799 11.1344 10.9675 11.4746 10.0204C11.8148 9.07337 11.8412 8.04197 11.5499 7.07874C11.2586 6.11552 10.665 5.27161 9.85702 4.67181C9.049 4.07201 8.0694 3.74817 7.06309 3.74817C6.05678 3.74817 5.07718 4.07201 4.26916 4.67181C3.46114 5.27161 2.86759 6.11552 2.57628 7.07874C2.28498 8.04197 2.31139 9.07337 2.6516 10.0204C2.99182 10.9675 3.62777 11.7799 4.46543 12.3376C2.95019 12.896 1.65614 13.9295 0.776369 15.2837C0.730132 15.3524 0.698015 15.4296 0.681886 15.5109C0.665757 15.5921 0.665938 15.6757 0.682417 15.7569C0.698897 15.8381 0.731347 15.9152 0.777881 15.9837C0.824415 16.0522 0.884105 16.1108 0.953481 16.1561C1.02286 16.2013 1.10054 16.2323 1.182 16.2473C1.26347 16.2622 1.34709 16.2609 1.42802 16.2432C1.50895 16.2256 1.58557 16.192 1.65342 16.1445C1.72126 16.097 1.77899 16.0365 1.82324 15.9665C2.39074 15.0937 3.16727 14.3764 4.08234 13.8799C4.9974 13.3834 6.022 13.1233 7.06309 13.1233C8.10418 13.1233 9.12878 13.3834 10.0438 13.8799C10.9589 14.3764 11.7354 15.0937 12.3029 15.9665C12.3946 16.1027 12.5362 16.1974 12.6971 16.2301C12.8581 16.2628 13.0254 16.2308 13.1629 16.1411C13.3005 16.0514 13.3972 15.9111 13.4321 15.7507C13.4671 15.5902 13.4375 15.4225 13.3498 15.2837C12.47 13.9295 11.176 12.896 9.66075 12.3376ZM3.62559 8.43757C3.62559 7.7577 3.82719 7.09309 4.20491 6.5278C4.58263 5.9625 5.11949 5.52191 5.74761 5.26174C6.37574 5.00156 7.0669 4.93349 7.73371 5.06612C8.40052 5.19876 9.01303 5.52615 9.49377 6.00689C9.97451 6.48763 10.3019 7.10014 10.4345 7.76695C10.5672 8.43376 10.4991 9.12492 10.2389 9.75305C9.97875 10.3812 9.53816 10.918 8.97286 11.2957C8.40757 11.6735 7.74296 11.8751 7.06309 11.8751C6.15172 11.874 5.27798 11.5115 4.63355 10.8671C3.98912 10.2227 3.62662 9.34894 3.62559 8.43757ZM20.0428 16.1485C19.9039 16.239 19.7348 16.2707 19.5727 16.2366C19.4105 16.2024 19.2685 16.1053 19.1779 15.9665C18.6111 15.0931 17.8347 14.3756 16.9194 13.8793C16.0042 13.383 14.9792 13.1237 13.9381 13.1251C13.7723 13.1251 13.6134 13.0592 13.4961 12.942C13.3789 12.8248 13.3131 12.6658 13.3131 12.5001C13.3131 12.3343 13.3789 12.1753 13.4961 12.0581C13.6134 11.9409 13.7723 11.8751 13.9381 11.8751C14.4443 11.8746 14.9442 11.7623 15.402 11.5463C15.8598 11.3302 16.2642 11.0157 16.5864 10.6252C16.9086 10.2347 17.1405 9.77791 17.2656 9.2874C17.3908 8.79688 17.4061 8.28478 17.3104 7.78769C17.2147 7.29059 17.0103 6.82077 16.712 6.41179C16.4137 6.00281 16.0287 5.66476 15.5846 5.42182C15.1405 5.17887 14.6482 5.03701 14.1429 5.00637C13.6376 4.97574 13.1317 5.05709 12.6615 5.2446C12.5849 5.27774 12.5023 5.29518 12.4188 5.29589C12.3353 5.2966 12.2525 5.28055 12.1753 5.24871C12.098 5.21687 12.028 5.16987 11.9692 5.1105C11.9105 5.05113 11.8642 4.98058 11.8332 4.90303C11.8022 4.82548 11.787 4.7425 11.7886 4.65899C11.7902 4.57548 11.8085 4.49314 11.8425 4.41683C11.8765 4.34052 11.9254 4.27179 11.9863 4.2147C12.0473 4.15761 12.1191 4.11332 12.1975 4.08445C13.2736 3.65527 14.4706 3.63982 15.5574 4.04109C16.6443 4.44236 17.544 5.23191 18.0831 6.25743C18.6222 7.28294 18.7623 8.47176 18.4766 9.59454C18.1909 10.7173 17.4995 11.6945 16.5357 12.3376C18.051 12.896 19.345 13.9295 20.2248 15.2837C20.3153 15.4225 20.347 15.5916 20.3129 15.7538C20.2787 15.916 20.1816 16.058 20.0428 16.1485Z"
        fill={pathFillColor}
      />
    </svg>
  );
};

// navigation end ------------------------------------------------------------------------------

// SettingIcon
export const SettingIcon = ({ ...props }) => {
  return (
    <svg
      {...props}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.0154 26.75L15.0024 26.7498L14.9894 26.75C14.3529 26.7614 13.7241 26.6098 13.1628 26.3096L6.72932 22.5947C5.38042 21.6842 4.85777 21.2705 4.5954 20.8158C4.34552 20.3827 4.28906 19.8345 4.28906 18.3936V11.6061C4.28906 10.165 4.34531 9.61563 4.59054 9.18567C4.84639 8.7371 5.35478 8.33236 6.67617 7.43714L13.1567 3.69367C13.7283 3.40208 14.361 3.25 15.0028 3.25C15.6447 3.25 16.2773 3.40209 16.8489 3.69369L23.2763 7.40499C24.6252 8.31555 25.1479 8.72919 25.4102 9.18391C25.6601 9.617 25.7166 10.1652 25.7166 11.6061V18.3936C25.7166 19.8347 25.6603 20.3841 25.4151 20.8141C25.1592 21.2626 24.6508 21.6674 23.3294 22.5626L16.8432 26.3094C16.2813 26.609 15.6523 26.7607 15.0154 26.75ZM15.0028 19.8124H15.0037C16.2794 19.8108 17.5023 19.3034 18.4043 18.4014C19.3063 17.4994 19.8137 16.2764 19.8153 15.0008V14.9999C19.8153 14.048 19.5331 13.1176 19.0043 12.3262C18.4755 11.5348 17.7238 10.9179 16.8445 10.5537C15.9651 10.1895 14.9975 10.0941 14.0639 10.2798C13.1304 10.4655 12.2729 10.9239 11.5999 11.5969C10.9268 12.27 10.4685 13.1275 10.2828 14.061C10.0971 14.9945 10.1924 15.9622 10.5566 16.8415C10.9209 17.7209 11.5377 18.4725 12.3291 19.0013C13.1205 19.5301 14.051 19.8124 15.0028 19.8124Z"
        stroke="#2D3134"
        stroke-width="1.5"
      />
    </svg>
  );
};

// NotificationIcon
export const NotificationIcon = ({ ...props }) => {
  return (
    <svg
      {...props}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.5349 18.4997L23.5369 18.503C23.9048 19.1068 23.9687 19.8153 23.7255 20.4607C23.478 21.1176 22.9707 21.6108 22.3183 21.8252L22.3141 21.8266C19.9687 22.6124 17.4994 23.0002 15.0274 23.0002C12.5554 23.0002 10.0873 22.6124 7.74393 21.8152L7.74242 21.8146C7.00184 21.5645 6.48274 21.0635 6.27094 20.4723L6.27096 20.4723L6.2688 20.4664C6.04325 19.8529 6.11131 19.164 6.50779 18.4989C6.50814 18.4983 6.50849 18.4977 6.50884 18.4972L7.76913 16.4133L7.76921 16.4134L7.7752 16.4031C7.95246 16.0992 8.09842 15.6985 8.19953 15.3267C8.3005 14.9553 8.37737 14.5369 8.37737 14.1877V11.0252C8.37737 8.42375 9.89104 6.16376 12.0864 5.07171L12.2939 4.96849L12.407 4.76622C12.9263 3.83745 13.9029 3.2502 14.9899 3.2502V3.25024L14.9977 3.25016C15.5185 3.24473 16.0311 3.37927 16.4821 3.63972C16.9331 3.90017 17.3058 4.27697 17.5614 4.73074L17.678 4.93778L17.8925 5.0399C19.0242 5.57856 19.9803 6.42662 20.6501 7.48597C21.3199 8.54532 21.676 9.77267 21.6774 11.026V14.1877C21.6774 14.5368 21.7543 14.9552 21.855 15.3274C21.9562 15.7013 22.1012 16.1016 22.2751 16.4079L22.2799 16.4164L22.2849 16.4247L23.5349 18.4997ZM12.9472 25.9224C13.6304 25.9789 14.3274 26.0127 15.0274 26.0127C15.7157 26.0127 16.4012 25.9789 17.0726 25.9224C16.9665 26.023 16.8528 26.1162 16.7322 26.201C16.2256 26.5573 15.6216 26.749 15.0024 26.7502C14.2379 26.7502 13.4856 26.4492 12.9472 25.9224Z"
        stroke="#2D3134"
        stroke-width="1.5"
      />
    </svg>
  );
};

// Received payment
export const ReceivedPayIcon = ({ ...props }) => {
  return (
    <svg
      {...props}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.8611 30.6667L15.6667 23.3333V21.3333H19.3333C20.2593 21.3333 21.0833 21.0046 21.8056 20.3472C22.5278 19.6898 22.9259 18.9074 23 18H15V16H22.6111C22.2593 15.3519 21.8009 14.8565 21.2361 14.5139C20.6713 14.1713 20.037 14 19.3333 14H15V12H27V14H23.6667C23.9074 14.3148 24.125 14.625 24.3194 14.9306C24.5139 15.2361 24.6574 15.5926 24.75 16H27V18H25C24.9074 19.5 24.3148 20.7639 23.2222 21.7917C22.1296 22.8194 20.8333 23.3333 19.3333 23.3333H18.4722L25.6667 30.6667H22.8611Z"
        fill="#2D3134"
      />
      <g clip-path="url(#clip0_754_2669)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M37.3367 11.1872C37.3354 11.5087 37.0737 11.7682 36.7522 11.7669L28.8843 11.735C28.7287 11.7343 28.5798 11.6714 28.4709 11.5603C28.362 11.4492 28.3021 11.2991 28.3046 11.1435L28.4316 3.27652C28.4367 2.95509 28.7015 2.69871 29.023 2.7039C29.3444 2.70909 29.6008 2.97387 29.5956 3.2953L29.4915 9.7451L38.8726 0.551626C39.1022 0.326614 39.4707 0.330335 39.6957 0.559938C39.9207 0.789542 39.917 1.15808 39.6874 1.38309L30.3064 10.5766L36.7569 10.6028C37.0784 10.6041 37.338 10.8657 37.3367 11.1872Z"
          fill="#2D3134"
          stroke="#2D3134"
          stroke-width="0.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <path
        d="M38.9686 21.092C38.7493 24.9013 37.3882 28.5562 35.0625 31.5811C32.7368 34.6059 29.5543 36.8604 25.9292 38.0512C22.3042 39.2419 18.4047 39.3136 14.7384 38.2569C11.072 37.2003 7.80876 35.0643 5.37344 32.127C2.93811 29.1897 1.44356 25.5872 1.08437 21.7886C0.725189 17.99 1.51801 14.1712 3.35962 10.8295C5.20122 7.48782 8.00628 4.778 11.4096 3.05288C14.8129 1.32777 18.6567 0.667278 22.4407 1.15741L22.2743 2.44162C18.7483 1.98488 15.1664 2.60036 11.9951 4.2079C8.82371 5.81544 6.20982 8.34058 4.49373 11.4545C2.77764 14.5685 2.03885 18.127 2.37355 21.6667C2.70826 25.2064 4.10095 28.5634 6.3703 31.3005C8.63965 34.0376 11.6805 36.028 15.097 37.0126C18.5134 37.9973 22.1472 37.9304 25.5251 36.8209C28.9031 35.7113 31.8687 33.6105 34.0359 30.7918C36.2031 27.9731 37.4715 24.5672 37.6758 21.0176L38.9686 21.092Z"
        fill="#2D3134"
        stroke="#2D3134"
      />
      <defs>
        <clipPath id="clip0_754_2669">
          <rect
            width="17.3333"
            height="21.3333"
            fill="white"
            transform="translate(40 21.3333) rotate(180)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

// Pending payment
export const PendingPayIcon = ({ ...props }) => {
  return (
    <svg
      {...props}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2140_4006)">
        <path
          d="M16.7181 27.6197C17.5751 27.5083 18.2522 28.3301 17.9618 29.129C17.81 29.534 17.4574 29.8183 17.0199 29.8752C16.0132 30.0022 14.9962 30.0324 13.9835 29.9654C10.2472 29.7187 6.88566 28.1308 4.39542 25.6883C1.67988 23.0249 0 19.3451 0 15.2814C0 11.217 1.67988 7.53783 4.39542 4.87439C7.11096 2.21096 10.8622 0.563305 15.006 0.563305C16.4426 0.563305 17.8428 0.766111 19.1773 1.14417C20.2721 1.454 21.327 1.88609 22.3213 2.43193L22.0255 1.67229C21.7787 1.03574 22.1044 0.323573 22.7528 0.0809092C23.4018 -0.161168 24.1279 0.15828 24.3753 0.794832L25.6255 4.00338C25.6726 4.12546 25.7001 4.254 25.7068 4.38438C25.8048 4.98224 25.4396 5.57483 24.8325 5.75536L21.4841 6.76002C20.8213 6.95696 20.1215 6.59003 19.9207 5.94059C19.7199 5.29114 20.094 4.60418 20.7562 4.40723L21.0317 4.32459C20.2381 3.90327 19.4006 3.56685 18.5337 3.32111C17.4239 3.00694 16.2406 2.83813 15.006 2.83813C11.5028 2.83813 8.33068 4.23081 6.03526 6.48277C3.73924 8.73415 2.31932 11.8448 2.31932 15.2814C2.31932 18.7173 3.73924 21.828 6.03526 24.08C8.11554 26.1203 10.9153 27.4556 14.0295 27.6877C14.9199 27.7539 15.8361 27.7322 16.7181 27.6197ZM20.7586 26.404C19.8251 26.8724 19.9494 28.2152 20.9552 28.51C21.2462 28.5909 21.5361 28.5663 21.8074 28.4333C22.5556 28.0646 23.2739 27.6302 23.9474 27.1426C24.2761 26.9023 24.447 26.5236 24.4118 26.1233C24.3221 25.2388 23.2954 24.7904 22.5657 25.3156C21.996 25.7282 21.3914 26.0923 20.7586 26.404ZM25.4892 22.3274C24.961 23.0999 25.5544 24.1386 26.5034 24.0976C26.8745 24.0782 27.2068 23.9 27.4147 23.5952C27.8845 22.9118 28.2902 22.1961 28.638 21.4458C28.9733 20.705 28.451 19.875 27.6245 19.8404C27.1506 19.8252 26.7215 20.0848 26.5243 20.5086C26.2297 21.1446 25.8873 21.7483 25.4892 22.3274ZM27.6203 16.4941C27.5785 16.9407 27.7996 17.3592 28.1934 17.5861C28.9321 17.9976 29.8428 17.5368 29.9295 16.7086C30.009 15.8869 30.0215 15.0733 29.9641 14.2498C29.9355 13.8541 29.7024 13.5054 29.3438 13.3207C28.5394 12.9116 27.5863 13.5235 27.6502 14.4092C27.6992 15.1079 27.6878 15.7966 27.6203 16.4941ZM26.6594 10.3759C26.9193 10.9638 27.6167 11.2282 28.2102 10.9597C28.7821 10.7018 29.0384 10.0448 28.7904 9.47738C28.4618 8.72184 28.0661 7.99561 27.6137 7.30396C27.0454 6.44701 25.708 6.69671 25.5012 7.6996C25.4444 7.99443 25.4982 8.28223 25.6637 8.53603C26.0474 9.12335 26.3809 9.73411 26.6594 10.3759Z"
          fill="#2D3134"
        />
        <path
          d="M16.8958 22L11.5 16.5V15H14.25C14.9444 15 15.5625 14.7535 16.1042 14.2604C16.6458 13.7674 16.9444 13.1806 17 12.5H11V11H16.7083C16.4444 10.5139 16.1007 10.1424 15.6771 9.88542C15.2535 9.62847 14.7778 9.5 14.25 9.5H11V8H20V9.5H17.5C17.6806 9.73611 17.8438 9.96875 17.9896 10.1979C18.1354 10.4271 18.2431 10.6944 18.3125 11H20V12.5H18.5C18.4306 13.625 17.9861 14.5729 17.1667 15.3438C16.3472 16.1146 15.375 16.5 14.25 16.5H13.6042L19 22H16.8958Z"
          fill="#2D3134"
        />
      </g>
      <defs>
        <clipPath id="clip0_2140_4006">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

// Green Users
export const GreenUsersIcon = ({ ...props }) => {
  return (
    <svg
      {...props}
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.821 24.6751C20.4963 23.5598 21.7682 21.9349 22.4487 20.0408C23.1291 18.1467 23.1819 16.0839 22.5993 14.1574C22.0167 12.231 20.8296 10.5432 19.2135 9.34356C17.5975 8.14397 15.6383 7.49628 13.6257 7.49628C11.6131 7.49628 9.65388 8.14397 8.03783 9.34356C6.42179 10.5432 5.23469 12.231 4.65208 14.1574C4.06947 16.0839 4.12229 18.1467 4.80272 20.0408C5.48314 21.9349 6.75506 23.5598 8.43038 24.6751C5.39989 25.792 2.81179 27.8589 1.05225 30.5673C0.959775 30.7047 0.895541 30.8592 0.863284 31.0217C0.831026 31.1841 0.831387 31.3514 0.864346 31.5138C0.897305 31.6761 0.962205 31.8303 1.05527 31.9673C1.14834 32.1044 1.26772 32.2215 1.40647 32.312C1.54523 32.4025 1.70058 32.4646 1.86351 32.4945C2.02644 32.5244 2.1937 32.5217 2.35556 32.4864C2.51741 32.4511 2.67064 32.384 2.80634 32.289C2.94204 32.194 3.0575 32.0729 3.146 31.9329C4.28098 30.1872 5.83406 28.7528 7.66418 27.7597C9.49431 26.7667 11.5435 26.2466 13.6257 26.2466C15.7079 26.2466 17.7571 26.7667 19.5872 27.7597C21.4173 28.7528 22.9704 30.1872 24.1054 31.9329C24.2887 32.2054 24.5719 32.3948 24.8938 32.4601C25.2156 32.5255 25.5503 32.4615 25.8254 32.2821C26.1005 32.1027 26.2939 31.8222 26.3638 31.5013C26.4338 31.1804 26.3746 30.8449 26.1991 30.5673C24.4396 27.8589 21.8515 25.792 18.821 24.6751ZM6.75069 16.8751C6.75069 15.5153 7.1539 14.1861 7.90933 13.0555C8.66477 11.9249 9.7385 11.0438 10.9947 10.5234C12.251 10.0031 13.6333 9.86691 14.9669 10.1322C16.3006 10.3975 17.5256 11.0522 18.487 12.0137C19.4485 12.9752 20.1033 14.2002 20.3686 15.5338C20.6339 16.8675 20.4977 18.2498 19.9774 19.506C19.457 20.7623 18.5758 21.836 17.4452 22.5914C16.3146 23.3469 14.9854 23.7501 13.6257 23.7501C11.803 23.748 10.0555 23.023 8.76661 21.7342C7.47775 20.4453 6.75276 18.6978 6.75069 16.8751ZM39.5851 32.297C39.3074 32.478 38.9692 32.5414 38.6448 32.4731C38.3205 32.4048 38.0365 32.2105 37.8554 31.9329C36.7218 30.1862 35.1689 28.7511 33.3384 27.7585C31.5079 26.7659 29.458 26.2473 27.3757 26.2501C27.0442 26.2501 26.7262 26.1184 26.4918 25.884C26.2574 25.6495 26.1257 25.3316 26.1257 25.0001C26.1257 24.6686 26.2574 24.3506 26.4918 24.1162C26.7262 23.8818 27.0442 23.7501 27.3757 23.7501C28.3881 23.7491 29.3879 23.5246 30.3035 23.0924C31.2191 22.6603 32.028 22.0313 32.6723 21.2504C33.3166 20.4694 33.7805 19.5558 34.0308 18.5747C34.2811 17.5937 34.3116 16.5695 34.1202 15.5753C33.9288 14.5811 33.5202 13.6415 32.9235 12.8235C32.3269 12.0056 31.5569 11.3295 30.6687 10.8436C29.7804 10.3577 28.7958 10.074 27.7852 10.0127C26.7747 9.95142 25.763 10.1141 24.8226 10.4891C24.6692 10.5554 24.5042 10.5903 24.3371 10.5917C24.1701 10.5931 24.0045 10.561 23.85 10.4974C23.6956 10.4337 23.5555 10.3397 23.438 10.2209C23.3205 10.1022 23.228 9.9611 23.166 9.806C23.1039 9.6509 23.0736 9.48494 23.0768 9.31792C23.08 9.15091 23.1166 8.98622 23.1845 8.8336C23.2524 8.68098 23.3502 8.54352 23.4722 8.42934C23.5941 8.31516 23.7377 8.22658 23.8944 8.16883C26.0467 7.31047 28.4406 7.27958 30.6143 8.08212C32.7881 8.88466 34.5876 10.4638 35.6657 12.5148C36.7438 14.5658 37.0242 16.9435 36.4527 19.189C35.8812 21.4346 34.4984 23.3889 32.571 24.6751C35.6015 25.792 38.1896 27.8589 39.9491 30.5673C40.1302 30.8449 40.1936 31.1831 40.1253 31.5075C40.057 31.8319 39.8627 32.1158 39.5851 32.297Z"
        fill="#2D3134"
      />
    </svg>
  );
};

// Orange Calendar
export const OrangeCalendarIcon = ({ ...props }) => {
  return (
    <svg
      {...props}
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M34.25 5H29.25V3.75C29.25 3.41848 29.1183 3.10054 28.8839 2.86612C28.6495 2.6317 28.3315 2.5 28 2.5C27.6685 2.5 27.3505 2.6317 27.1161 2.86612C26.8817 3.10054 26.75 3.41848 26.75 3.75V5H14.25V3.75C14.25 3.41848 14.1183 3.10054 13.8839 2.86612C13.6495 2.6317 13.3315 2.5 13 2.5C12.6685 2.5 12.3505 2.6317 12.1161 2.86612C11.8817 3.10054 11.75 3.41848 11.75 3.75V5H6.75C5.75544 5 4.80161 5.39509 4.09835 6.09835C3.39509 6.80161 3 7.75544 3 8.75V33.75C3 34.7446 3.39509 35.6984 4.09835 36.4017C4.80161 37.1049 5.75544 37.5 6.75 37.5H34.25C35.2446 37.5 36.1984 37.1049 36.9017 36.4017C37.6049 35.6984 38 34.7446 38 33.75V8.75C38 7.75544 37.6049 6.80161 36.9017 6.09835C36.1984 5.39509 35.2446 5 34.25 5ZM4.25 13.75H36.75V34.25C36.75 35.3546 35.8546 36.25 34.75 36.25H6.25C5.14543 36.25 4.25 35.3546 4.25 34.25V13.75ZM36.75 12.5H4.25V8.25C4.25 7.14543 5.14543 6.25 6.25 6.25H34.75C35.8546 6.25 36.75 7.14543 36.75 8.25V12.5Z"
        fill="#2D3134"
      />
      <path
        d="M24.8061 25.6643L28.9795 29.8378C29.2378 30.0961 29.6795 29.9132 29.6795 29.5479V21.2009C29.6795 20.8356 29.2378 20.6525 28.9795 20.9109L24.8061 25.0844C24.7292 25.1614 24.686 25.2656 24.686 25.3744C24.686 25.4831 24.7292 25.5874 24.8061 25.6643Z"
        fill="#2D3134"
      />
      <path
        d="M23.5032 30.7137H13.609C12.8102 30.7137 12.1626 30.0661 12.1626 29.2673V21.4813C12.1626 20.6825 12.8102 20.0349 13.609 20.0349H23.5032C24.3021 20.0349 24.9497 20.6825 24.9497 21.4813V29.2673C24.9497 29.2673 24.9497 29.2673 24.9497 29.2673C24.9496 30.0662 24.302 30.7137 23.5032 30.7137Z"
        stroke="#2D3134"
      />
    </svg>
  );
};

// Regular Notification
export const RegularNotificationIcon: React.FC<IconProps> = ({
  pathFillColor,
  strokeWidth,
  ...props
}) => {
  return (
    <svg
      {...props}
      viewBox="0 0 15 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.7506 11.5012L13.7519 11.5034C14.0259 11.9479 14.0733 12.4692 13.8924 12.944C13.7085 13.4267 13.3301 13.7923 12.84 13.9515L12.84 13.9515L12.8373 13.9524C11.1244 14.52 9.32111 14.8 7.51599 14.8C5.71088 14.8 3.90843 14.52 2.19689 13.9441L2.19589 13.9438C1.64394 13.7594 1.25552 13.3895 1.09697 12.9518L1.09699 12.9518L1.09552 12.9478C0.927233 12.4951 0.97867 11.9882 1.2726 11.5007C1.27284 11.5003 1.27308 11.4999 1.27332 11.4995L2.19099 9.99893L2.19104 9.99896L2.19509 9.99209C2.32178 9.77732 2.42702 9.49225 2.50022 9.22599C2.5733 8.96017 2.62845 8.66221 2.62845 8.41508V6.13809C2.62845 4.25214 3.73818 2.61085 5.35235 1.81678L5.4909 1.74863L5.56689 1.61422C5.95173 0.933564 6.67762 0.500143 7.48869 0.500143V0.50017L7.49385 0.500117C7.88232 0.496109 8.26444 0.595385 8.6002 0.78715C8.93592 0.978891 9.21269 1.25587 9.40215 1.58857L9.48048 1.72611L9.62369 1.79352C10.4559 2.18527 11.1582 2.80165 11.6498 3.57062C12.1414 4.33954 12.4025 5.22987 12.4035 6.13864V8.41508C12.4035 8.6622 12.4587 8.96011 12.5316 9.22655C12.6049 9.49426 12.7095 9.77918 12.8339 9.99595L12.8337 9.99603L12.8405 10.0072L13.7506 11.5012ZM5.90841 16.8323C5.90203 16.8264 5.89568 16.8204 5.88937 16.8144L5.89838 16.8151C5.8987 16.8152 5.89903 16.8152 5.89935 16.8152C6.42952 16.8612 6.97165 16.889 7.51599 16.889C8.05186 16.889 8.58548 16.8611 9.10707 16.8151L9.10997 16.8148C9.11225 16.8146 9.11455 16.8144 9.11687 16.8142C9.01662 16.9179 8.90585 17.0123 8.78578 17.0958L9.07124 17.5063L8.78577 17.0958C8.40891 17.3579 7.95896 17.4993 7.49709 17.5C6.90765 17.4998 6.32886 17.2624 5.92634 16.8498L5.9176 16.8409L5.90841 16.8323Z"
        stroke={pathFillColor}
        stroke-width={strokeWidth}
      />
    </svg>
  );
};

// Regular Bin
export const RegularBinIcon: React.FC<IconProps> = ({
  strokeWidth,
  ...props
}) => {
  return (
    <svg
      {...props}
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.3333 4V3.33333C11.3333 2.39991 11.3333 1.9332 11.1517 1.57668C10.9919 1.26308 10.7369 1.00811 10.4233 0.848324C10.0668 0.666668 9.60009 0.666668 8.66667 0.666668H7.33333C6.39991 0.666668 5.9332 0.666668 5.57668 0.848324C5.26308 1.00811 5.00811 1.26308 4.84832 1.57668C4.66667 1.9332 4.66667 2.39991 4.66667 3.33333V4M6.33333 8.58333V12.75M9.66667 8.58333V12.75M0.5 4H15.5M13.8333 4V13.3333C13.8333 14.7335 13.8333 15.4335 13.5608 15.9683C13.3212 16.4387 12.9387 16.8212 12.4683 17.0609C11.9335 17.3333 11.2335 17.3333 9.83333 17.3333H6.16667C4.76654 17.3333 4.06647 17.3333 3.53169 17.0609C3.06129 16.8212 2.67883 16.4387 2.43915 15.9683C2.16667 15.4335 2.16667 14.7335 2.16667 13.3333V4"
        stroke="#242424"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width={strokeWidth}
      />
    </svg>
  );
};

// clock icon
export const ClockIcon = ({ ...props }) => {
  return (
    <svg
      {...props}
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.6862 10.515C19.226 10.515 18.8529 10.8881 18.8529 11.3483V18.238L15.7734 16.4607C15.3752 16.2305 14.8658 16.3668 14.6357 16.765C14.4056 17.1633 14.5418 17.6726 14.9401 17.9027L19.2695 20.4027C19.3961 20.4763 19.5398 20.515 19.6862 20.515C20.1461 20.5142 20.5187 20.1416 20.5195 19.6817V11.3483C20.5195 10.8881 20.1464 10.515 19.6862 10.515ZM19.6862 3.01501C10.4815 3.01501 3.01953 10.477 3.01953 19.6817C3.01953 28.8864 10.4815 36.3483 19.6862 36.3483C28.8864 36.3376 36.3421 28.8819 36.3529 19.6817C36.3529 10.477 28.8909 3.01501 19.6862 3.01501ZM19.6862 34.6817C11.4019 34.6817 4.6862 27.966 4.6862 19.6817C4.6862 11.3974 11.4019 4.68168 19.6862 4.68168C27.9667 4.69073 34.6771 11.4011 34.6862 19.6817C34.6862 27.966 27.9705 34.6817 19.6862 34.6817Z"
        fill="#C58843"
        stroke="#C58843"
      />
    </svg>
  );
};

// calendar icon
export const CalendarIcon = ({ ...props }) => {
  return (
    <svg
      {...props}
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.1235 7.6824H32.2874C33.1799 7.70087 34.0286 8.07301 34.6468 8.717C35.2651 9.361 35.6023 10.2241 35.5843 11.1167V31.7223C35.6023 32.6149 35.2651 33.478 34.6468 34.122C34.0286 34.766 33.1799 35.1382 32.2874 35.1566H8.11009C7.21756 35.1382 6.36889 34.766 5.75066 34.122C5.13242 33.478 4.79522 32.6149 4.81318 31.7223V11.1167C4.79522 10.2241 5.13242 9.361 5.75066 8.717C6.36889 8.07301 7.21756 7.70087 8.11009 7.6824H10.274M16.9018 7.6824H23.4956M13.6049 4.3855V9.88034M26.7926 4.3855V9.88034M4.81318 16.4742H35.5843"
        stroke="#C58843"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

// Analytics icon
export const AnalyticsIcon = ({ ...props }) => {
  return (
    <svg
      {...props}
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1122_4349)">
        <path
          d="M37.75 27.2415L31.1953 27.2649L27.2734 1.39776V1.38213C27.1406 0.546195 26.4766 -0.0553675 25.6719 -0.0866175C24.8672 -0.117867 24.1641 0.429008 23.9687 1.24151L16.9687 31.7806L12.6875 13.804L12.6797 13.7728C12.4844 13.0071 11.8359 12.4837 11.0781 12.4681C10.3203 12.4603 9.65625 12.9524 9.4375 13.7024L9.42969 13.7337L6.08594 26.9368L1.22656 26.929C0.367187 26.929 -0.335938 27.6321 -0.335938 28.4993C-0.335938 29.3587 0.367187 30.0696 1.22656 30.0696H7.32031C8.03125 30.0228 8.61719 29.5384 8.82812 28.8353L8.83594 28.804L11 20.2415L15.3516 38.5149L15.3594 38.5384C15.6172 39.5462 16.3984 39.8978 16.9922 39.8978H17.0078C17.6016 39.8978 18.3828 39.5306 18.6328 38.5071L25.3125 9.35088L28.2734 28.9134V28.929C28.3984 29.7259 29.0312 30.3353 29.8047 30.3978L29.875 30.4056L37.75 30.3743C38.6094 30.3743 39.3125 29.6712 39.3047 28.804C39.3125 27.9368 38.6094 27.2415 37.75 27.2415Z"
          fill="#C58843"
        />
      </g>
      <defs>
        <clipPath id="clip0_1122_4349">
          <rect
            width="40"
            height="40"
            fill="white"
            transform="translate(0 0.191895)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

// Google Icon
export const GoogleIcon = ({ ...props }) => {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1317_7278)">
        <path
          d="M4.43242 12.0863L3.73625 14.6852L1.19176 14.739C0.431328 13.3286 0 11.7149 0 10C0 8.34179 0.403281 6.77804 1.11812 5.40112H1.11867L3.38398 5.81644L4.37633 8.06815C4.16863 8.67366 4.05543 9.32366 4.05543 10C4.05551 10.7341 4.18848 11.4374 4.43242 12.0863Z"
          fill="#FBBB00"
        />
        <path
          d="M19.8261 8.1319C19.941 8.73682 20.0009 9.36155 20.0009 10C20.0009 10.716 19.9256 11.4143 19.7822 12.088C19.2954 14.3803 18.0234 16.3819 16.2613 17.7984L16.2608 17.7978L13.4075 17.6522L13.0037 15.1314C14.1729 14.4456 15.0866 13.3726 15.568 12.088H10.2207V8.1319H19.8261Z"
          fill="#518EF8"
        />
        <path
          d="M16.2595 17.7977L16.2601 17.7983C14.5464 19.1757 12.3694 19.9999 9.99965 19.9999C6.19141 19.9999 2.88043 17.8713 1.19141 14.7389L4.43207 12.0862C5.27656 14.34 7.45074 15.9444 9.99965 15.9444C11.0952 15.9444 12.1216 15.6483 13.0024 15.1312L16.2595 17.7977Z"
          fill="#28B446"
        />
        <path
          d="M16.382 2.30219L13.1425 4.95437C12.2309 4.38461 11.1534 4.05547 9.99906 4.05547C7.39246 4.05547 5.17762 5.73348 4.37543 8.06812L1.11773 5.40109H1.11719C2.78148 2.1923 6.13422 0 9.99906 0C12.4254 0 14.6502 0.864297 16.382 2.30219Z"
          fill="#F14336"
        />
      </g>
      <defs>
        <clipPath id="clip0_1317_7278">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

// Google Meet Icon
export const GoogleMeetIcon = ({ ...props }) => {
  return (
    <svg
      {...props}
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.3093 9.35769V11.2692C11.3084 11.5546 11.1947 11.828 10.9929 12.0298C10.7912 12.2316 10.5177 12.3453 10.2324 12.3461H3.23242V9.11538H8.07854V6.4231L11.3093 9.35769Z"
        fill="#00AC47"
      />
      <path
        d="M11.3079 3.73071V9.3576L8.07715 6.423V3.73071H11.3079Z"
        fill="#31A950"
      />
      <path d="M3.23075 0.5V3.73075H0L3.23075 0.5Z" fill="#EA4435" />
      <path d="M3.23075 3.73071H0V9.65375H3.23075V3.73071Z" fill="#4285F4" />
      <path
        d="M11.3093 1.57692V3.73075H11.0401L8.07854 6.42303V3.73075H3.23242V0.5H10.2324C10.5177 0.500838 10.7912 0.614568 10.9929 0.816347C11.1947 1.01813 11.3084 1.29156 11.3093 1.57692Z"
        fill="#FFBA00"
      />
      <path
        d="M3.23075 9.11548V12.3462H1.07692C0.791558 12.3454 0.518126 12.2317 0.316347 12.0299C0.114568 11.8281 0.000838103 11.5547 0 11.2693V9.11548H3.23075Z"
        fill="#0066DA"
      />
      <path
        d="M14.0002 2.25521V10.5905C14.0002 10.6947 13.97 10.7966 13.9132 10.8839C13.8564 10.9712 13.7754 11.0402 13.6802 11.0824C13.585 11.1245 13.4796 11.1382 13.3767 11.1216C13.2739 11.105 13.1781 11.059 13.101 10.989L11.3079 9.35747L8.07715 6.42288L11.0387 3.73059L11.3079 3.48828L13.101 1.85676C13.1781 1.78678 13.2739 1.74071 13.3767 1.72414C13.4796 1.70757 13.585 1.72121 13.6802 1.7634C13.7754 1.8056 13.8564 1.87453 13.9132 1.96184C13.97 2.04914 14.0002 2.15106 14.0002 2.25521Z"
        fill="#00AC47"
      />
      <path
        d="M11.3079 3.48828V9.35747L8.07715 6.42288L11.0387 3.73059L11.3079 3.48828Z"
        fill="#188038"
      />
    </svg>
  );
};
