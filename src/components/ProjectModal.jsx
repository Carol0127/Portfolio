import { useEffect } from "react";

function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-999 bg-white flex flex-col">
      {/* Header：手機版縮小 Padding，確保字體不要太大 */}
      <div className="flex justify-between items-center px-4 py-4 lg:px-8 lg:py-6 border-b border-neutral-200 bg-white z-10">
        <h2 className="text-h4 lg:text-h3 font-dela uppercase">Project Detail</h2>
        <button
          onClick={onClose}
          className="hover:rotate-90 transition-transform duration-300"
        >
          <span className="material-symbols-outlined text-[32px] lg:text-[40px]! cursor-pointer">close</span>
        </button>
      </div>

      {/* 主內容區：手機版改為 flex-col 並允許整體滾動 */}
      <div className="flex-1 overflow-y-auto lg:overflow-hidden custom-scrollbar">
        <div className="max-w-324 mx-auto grid grid-cols-1 lg:grid-cols-12 h-full">
          {/* 左側資訊區：手機版排在最上面，取消 border-r */}
          <aside className="col-span-1 lg:col-span-3 border-b lg:border-b-0 lg:border-r border-neutral-100">
            {/* 手機版改為 static，lg 才 sticky 且設定高度 */}
            <div className="static lg:sticky lg:top-0 p-6 lg:p-8 flex flex-col justify-between lg:h-[calc(100vh-80px)] bg-neutral-50 lg:bg-transparent">
              <div className="space-y-6 lg:space-y-10">
                <h3 className="text-h3">{project.name}</h3>
                <div className="flex justify-between items-center border-b pb-4">
                  <p className="text-label-m text-neutral-500 uppercase">Year</p>
                  <p className="text-h5">{project.year}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.roles.map((role) => (
                    <span
                      key={role}
                      className="bg-neutral-600 text-white py-2 px-3 text-label-s lg:text-label-m"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* 手機版連結區：增加 mt-8 避免太擠 */}
              {project.demo && (
                <div className="mt-8 lg:mt-0 ">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between group bg-neutral-800 text-white p-4 hover:bg-primary-300 transition-colors"
                  >
                    <span className=" uppercase text-body-s lg:text-body-m">Live Site</span>
                    <span className="material-symbols-outlined align-bottom">arrow_outward</span>
                  </a>
                </div>
              )}
            </div>
          </aside>

          {/* 中間間隙：手機版隱藏 */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* 右側內容區 */}
          <main className="col-span-1 lg:col-span-8 p-6 lg:p-0 lg:overflow-y-auto custom-scrollbar lg:pb-8">
            <div className="space-y-10 lg:space-y-12">
              <img
                src={project.hero}
                alt="hero"
                className="w-full"
              />

              {/* 專案簡介 */}
              <section>
                <h4 className="text-h4 mb-3 pb-3 border-b">Project Overview</h4>
                <p className="text-body-s text-neutral-700 leading-relaxed">{project.overview}</p>
              </section>

              {/* 專案亮點 */}
              {project.Highlights && project.Highlights.length > 0 && (
                <section className="animate-in fade-in duration-700">
                  <h4 className="text-h4 mb-3 pb-3 border-b border-neutral-200">Key Highlights</h4>
                  <ul className="space-y-4">
                    {project.Highlights.map((point, index) => (
                      <li
                        key={index}
                        className="flex gap-4 items-start"
                      >
                        <span className="bg-neutral-800 text-white px-2 py-0.5 text-xs mt-1 font-mono">
                          0{index + 1}
                        </span>
                        <p className="text-body-m text-neutral-700">{point}</p>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* 圖片展示 */}
              <section className="space-y-4 lg:space-y-6">
                {project.photo.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt="Screenshot"
                    className="w-full"
                  />
                ))}
              </section>

              {/* 影片展示 */}
              {project.video && (
                <section>
                  <div className="aspect-video w-full bg-black shadow-lg">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${
                        project.video.match(
                          /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=))([\w-]{11})/,
                        )?.[1]
                      }`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </section>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
