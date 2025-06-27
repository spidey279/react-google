

const Footer = () => {
  return (
    <footer className="h-[17vh] bg-[#131415]">
      <div className="h-[55%]  border-b-[#3C4043] border-b-1  text-white flex items-center pl-8 text-sm ">
        India
      </div>
      <div className="flex h-[45%] text-white text-sm justify-between items-center ">
        <div className="flex items-center justify-evenly pl-5 gap-3  w-[26%] h-full">
          <a
            href="https://business.google.com/in/google-ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
            className="hover:underline"
          >
            Advertising
          </a>
          <a
            href="https://business.google.com/in/business-profile/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1"
            className="hover:underline"
          >
            Business
          </a>
          <a
            href="https://www.google.com/search/howsearchworks/?fg=1"
            className="hover:underline"
          >
            How Search works
          </a>
        </div>
        <div className="flex items-center gap-8 justify-end  pr-10  w-[26%] h-full">
          <a
            href="https://policies.google.com/privacy?hl=en-IN&fg=1"
            className="hover:underline"
          >
            Privacy
          </a>
          <a
            href="https://policies.google.com/terms?hl=en-IN&fg=1"
            className="hover:underline"
          >
            Terms
          </a>
          <a className="hover:underline">Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
