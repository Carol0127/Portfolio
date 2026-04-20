function Footer() {
  return (
    <>
      <footer className="bg-neutral-800 px-4 py-10 md:p-10 w-full">
        <div className="max-w-324 mx-auto md:gap-6 grid grid-1 md:grid-cols-12 items-center">
          <div className="md:col-span-4 mx-auto mb-12 md:mb-0">
            <img
              src="FooterLogo.png"
              alt="FooterLogo"
              className="w-full max-w-82 h-auto"
            />
          </div>
          <div className="md:col-span-8 flex items-center md:items-end flex-col gap-y-6">
            <h1 className="text-h1 text-neutral-100">Thanks For Watching</h1>
            <p className="text-body-s text-white">很高興認識您！如果您對我的作品感興趣，或有任何合作機會，歡迎聯繫我</p>
            <div className="flex flex-col flex-wrap md:flex-row gap-y-3 md:gap-x-5">
              <a
                href="tel:0922165665"
                className="btn btn-outline rounded-4xl "
              >
                <span className="material-symbols-outlined">call</span>
                0922-165-665
              </a>

              <a
                href="mailto:a52524444@gmail.com"
                className="btn btn-outline rounded-4xl "
              >
                <span className="material-symbols-outlined">mail</span>
                a52524444@gmail.com
              </a>

              <a
                href="#top"
                className="btn btn-outline rounded-4xl "
              >
                <span className="material-symbols-outlined">arrow_upward_alt</span>
                To TOP
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
