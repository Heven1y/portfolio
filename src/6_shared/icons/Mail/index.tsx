import React from "react";

export default function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="13"
      viewBox="0 0 16 13"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.78571 1.78571L6.58457 5.40964L6.58617 5.41096C7.11902 5.80172 7.38561 5.99722 7.6776 6.07274C7.93568 6.13949 8.20697 6.13949 8.46505 6.07274C8.7573 5.99715 9.02466 5.80109 9.55846 5.40964C9.55846 5.40964 12.6365 3.04752 14.3571 1.78571M1 9.48587V3.51444C1 2.63436 1 2.19399 1.17128 1.85784C1.32193 1.56216 1.56216 1.32193 1.85784 1.17128C2.19399 1 2.63436 1 3.51444 1H12.6287C13.5088 1 13.9482 1 14.2844 1.17128C14.5801 1.32193 14.8211 1.56216 14.9718 1.85784C15.1429 2.19366 15.1429 2.6335 15.1429 3.51186V9.48853C15.1429 10.3669 15.1429 10.8061 14.9718 11.1419C14.8211 11.4376 14.5801 11.6782 14.2844 11.8289C13.9486 12 13.5094 12 12.631 12H3.51186C2.6335 12 2.19366 12 1.85784 11.8289C1.56216 11.6782 1.32193 11.4376 1.17128 11.1419C1 10.8058 1 10.366 1 9.48587Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
