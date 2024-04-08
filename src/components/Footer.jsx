const Footer = () => {
  return (
    <footer className="bg-black h-64 padding-x relative font-Rubik ">
      <div className=" pt-20 text-white">
        <div className="flex  flex-row justify-between">
          <div className="">
            <h2 className=" text-xl">
              KARO ABHAYAAS <br />
              112, ELECTRONIC CITY <br />
              BANGALORE, INDIA
            </h2>
          </div>
          <div>
            <h2 className="text-xl">
              SOME TEXT ABOUT SOMETHING <br />
              AND THEN SOME OTHER THING
            </h2>
            <div className="flex gap-12 text-sm py-8 justify-center">
              <button className="p-2 bg-white text-black px-3 ">
                CONTACT US
              </button>
              <button className="p-2 bg-white text-black px-3 ">
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
