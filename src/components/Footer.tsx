const Footer = () => {
  return (
    <footer
      className="flex justify-center items-center py-8 px-8 border-t border-[rgba(117,117,117,1)]"
      style={{ backgroundColor: "#1D2046", minHeight: "230px" }}
    >
      <div className="flex w-full max-w-[1152px] justify-between items-start">
        {/* Socials Section */}
        <div className="flex flex-col items-start gap-1.5">
          <h3
            className="text-[32px] font-medium leading-[120%] tracking-[-0.64px] font-outfit mb-6"
            style={{ color: "#F5F5F5" }}
          >
            Socials
          </h3>
          <div className="flex flex-col gap-4 py-1.5">
            {/* Instagram */}
            <div className="flex items-center gap-2.5 h-10">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 p-0.5"
              >
                <path
                  d="M13.175 4.25H26.825C32.025 4.25 36.25 8.475 36.25 13.675V27.325C36.25 29.8247 35.257 32.222 33.4895 33.9895C31.722 35.757 29.3247 36.75 26.825 36.75H13.175C7.975 36.75 3.75 32.525 3.75 27.325V13.675C3.75 11.1753 4.74299 8.77805 6.51052 7.01052C8.27805 5.24299 10.6753 4.25 13.175 4.25ZM12.85 7.5C11.2985 7.5 9.81051 8.11634 8.71343 9.21343C7.61634 10.3105 7 11.7985 7 13.35V27.65C7 30.8837 9.61625 33.5 12.85 33.5H27.15C28.7015 33.5 30.1895 32.8837 31.2866 31.7866C32.3837 30.6895 33 29.2015 33 27.65V13.35C33 10.1163 30.3837 7.5 27.15 7.5H12.85ZM28.5312 9.9375C29.07 9.9375 29.5866 10.1515 29.9676 10.5324C30.3485 10.9134 30.5625 11.43 30.5625 11.9688C30.5625 12.5075 30.3485 13.0241 29.9676 13.4051C29.5866 13.786 29.07 14 28.5312 14C27.9925 14 27.4759 13.786 27.0949 13.4051C26.714 13.0241 26.5 12.5075 26.5 11.9688C26.5 11.43 26.714 10.9134 27.0949 10.5324C27.4759 10.1515 27.9925 9.9375 28.5312 9.9375ZM20 12.375C22.1549 12.375 24.2215 13.231 25.7452 14.7548C27.269 16.2785 28.125 18.3451 28.125 20.5C28.125 22.6549 27.269 24.7215 25.7452 26.2452C24.2215 27.769 22.1549 28.625 20 28.625C17.8451 28.625 15.7785 27.769 14.2548 26.2452C12.731 24.7215 11.875 22.6549 11.875 20.5C11.875 18.3451 12.731 16.2785 14.2548 14.7548C15.7785 13.231 17.8451 12.375 20 12.375ZM20 15.625C18.7071 15.625 17.4671 16.1386 16.5529 17.0529C15.6386 17.9671 15.125 19.2071 15.125 20.5C15.125 21.7929 15.6386 23.0329 16.5529 23.9471C17.4671 24.8614 18.7071 25.375 20 25.375C21.2929 25.375 22.5329 24.8614 23.4471 23.9471C24.3614 23.0329 24.875 21.7929 24.875 20.5C24.875 19.2071 24.3614 17.9671 23.4471 17.0529C22.5329 16.1386 21.2929 15.625 20 15.625Z"
                  fill="#F5F5F5"
                />
              </svg>
              <span
                className="text-[24px] font-normal leading-[120%] tracking-[-0.48px] font-outfit flex-1"
                style={{ color: "#F5F5F5" }}
              >
                @epicpomona
              </span>
            </div>

            {/* Discord */}
            <div className="flex items-center gap-2.5">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path
                  d="M31.8112 9.65783C29.65 8.65033 27.31 7.91908 24.8725 7.49658C24.8296 7.49719 24.7887 7.51472 24.7587 7.54533C24.4662 8.08158 24.125 8.78033 23.8975 9.31658C21.3121 8.92683 18.6829 8.92683 16.0975 9.31658C15.87 8.76408 15.5287 8.08158 15.22 7.54533C15.2037 7.51283 15.155 7.49658 15.1062 7.49658C12.6687 7.91908 10.345 8.65033 8.16749 9.65783C8.15124 9.65783 8.13499 9.67408 8.11874 9.69033C3.69874 16.3041 2.47999 22.7391 3.08124 29.1091C3.08124 29.1416 3.09749 29.1741 3.12999 29.1903C6.05499 31.3353 8.86624 32.6353 11.645 33.4966C11.6937 33.5128 11.7425 33.4966 11.7587 33.4641C12.4087 32.5703 12.9937 31.6278 13.4975 30.6366C13.53 30.5716 13.4975 30.5066 13.4325 30.4903C12.5062 30.1328 11.6287 29.7103 10.7675 29.2228C10.7025 29.1903 10.7025 29.0928 10.7512 29.0441C10.93 28.9141 11.1087 28.7678 11.2875 28.6378C11.32 28.6053 11.3687 28.6053 11.4012 28.6216C16.9912 31.1728 23.02 31.1728 28.545 28.6216C28.5775 28.6053 28.6262 28.6053 28.6587 28.6378C28.8375 28.7841 29.0162 28.9141 29.195 29.0603C29.26 29.1091 29.26 29.2066 29.1787 29.2391C28.3337 29.7428 27.44 30.1491 26.5137 30.5066C26.4487 30.5228 26.4325 30.6041 26.4487 30.6528C26.9687 31.6441 27.5537 32.5866 28.1875 33.4803C28.2362 33.4966 28.285 33.5128 28.3337 33.4966C31.1287 32.6353 33.94 31.3353 36.865 29.1903C36.8975 29.1741 36.9137 29.1416 36.9137 29.1091C37.6287 21.7478 35.7275 15.3616 31.8762 9.69033C31.86 9.67408 31.8437 9.65783 31.8112 9.65783ZM14.3425 25.2253C12.6687 25.2253 11.2712 23.6816 11.2712 21.7803C11.2712 19.8791 12.6362 18.3353 14.3425 18.3353C16.065 18.3353 17.43 19.8953 17.4137 21.7803C17.4137 23.6816 16.0487 25.2253 14.3425 25.2253ZM25.6687 25.2253C23.995 25.2253 22.5975 23.6816 22.5975 21.7803C22.5975 19.8791 23.9625 18.3353 25.6687 18.3353C27.3912 18.3353 28.7562 19.8953 28.74 21.7803C28.74 23.6816 27.3912 25.2253 25.6687 25.2253Z"
                  fill="#F5F5F5"
                />
              </svg>
              <span
                className="text-[24px] font-normal leading-[120%] tracking-[-0.48px] font-outfit flex-1 underline"
                style={{ color: "#F5F5F5" }}
              >
                Discord
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Columns */}
        <div className="flex justify-center items-start gap-12 p-1.5">
          {/* About Us */}
          <div className="flex flex-col items-start gap-3 w-[158px]">
            <div className="flex flex-col items-start gap-2.5 self-stretch pb-4">
              <h4
                className="text-[18px] font-semibold leading-[140%] font-outfit self-stretch"
                style={{ color: "rgba(243, 243, 243, 1)" }}
              >
                About Us
              </h4>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-[16px] font-normal leading-[140%] font-outfit hover:text-white transition-colors"
                style={{ color: "rgba(243, 243, 243, 1)" }}
              >
                What is Epic?
              </a>
              <a
                href="#"
                className="text-[16px] font-normal leading-[140%] font-outfit hover:text-white transition-colors"
                style={{ color: "rgba(243, 243, 243, 1)" }}
              >
                Mission Statement
              </a>
              <a
                href="#"
                className="text-[16px] font-normal leading-[140%] font-outfit hover:text-white transition-colors"
                style={{ color: "rgba(243, 243, 243, 1)" }}
              >
                Staff and Leadership
              </a>
            </div>
          </div>

          {/* Get Connected */}
          <div className="flex flex-col items-start gap-3 w-[189px]">
            <div className="flex flex-col items-start gap-2.5 self-stretch pb-4">
              <h4
                className="text-[18px] font-semibold leading-[140%] font-outfit self-stretch"
                style={{ color: "rgba(243, 243, 243, 1)" }}
              >
                Get Connected
              </h4>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-[16px] font-normal leading-[140%] font-outfit hover:text-white transition-colors"
                style={{ color: "rgba(243, 243, 243, 1)" }}
              >
                Local Churches
              </a>
              <a
                href="#"
                className="text-[16px] font-normal leading-[140%] font-colors"
                style={{ color: "rgba(243, 243, 243, 1)" }}
              >
                Upcoming Events
              </a>
              <a
                href="#"
                className="text-[16px] font-normal leading-[140%] font-outfit hover:text-white transition-colors"
                style={{ color: "rgba(243, 243, 243, 1)" }}
              >
                Discord Announcements
              </a>
            </div>
          </div>

          {/* Resources */}
          <div className="flex flex-col items-start gap-3 w-[123px]">
            <div className="flex flex-col items-start gap-2.5 self-stretch pb-4">
              <h4
                className="text-[18px] font-semibold leading-[140%] font-outfit self-stretch"
                style={{ color: "rgba(243, 243, 243, 1)" }}
              >
                Resources
              </h4>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-[16px] font-normal leading-[140%] font-outfit hover:text-white transition-colors"
                style={{ color: "rgba(243, 243, 243, 1)" }}
              >
                Rides Sign-up
              </a>
              <a
                href="#"
                className="text-[16px] font-normal leading-[140%] font-outfit hover:text-white transition-colors"
                style={{ color: "rgba(243, 243, 243, 1)" }}
              >
                Prayer Requests
              </a>
            </div>
          </div>

          {/* Support/Give */}
          <div className="flex flex-col items-start gap-3 w-[147px]">
            <div className="flex flex-col items-start gap-2.5 self-stretch pb-4">
              <h4
                className="text-[18px] font-semibold leading-[140%] font-outfit self-stretch"
                style={{ color: "rgba(243, 243, 243, 1)" }}
              >
                Support/Give
              </h4>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-[16px] font-normal leading-[140%] font-outfit hover:text-white transition-colors"
                style={{ color: "rgba(243, 243, 243, 1)" }}
              >
                Support SoCal Epic
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
