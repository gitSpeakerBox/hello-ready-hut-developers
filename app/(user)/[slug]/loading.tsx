const loading = () => {
  return (
    <div className="w-full h-full fixed z-10 left-0 top-0 inset-0 flex flex-col items-center main_padding_x main_padding_y  bg-[#2B2B2B]">
      <div className="mt-20 w-full flex flex-col items-center">
        <div className="rounded-[23px] h-[110px] w-[110px] aspect-square flex items-center justify-center text-center bg-slate-400 animate-pulse" />
        <span className="h-[45px] w-[110px] rounded-md mt-4 bg-slate-400 animate-pulse" />
        <span className="mt-3 h-[22px] w-[270px] rounded-md bg-slate-400 animate-pulse" />
        <span className="h-[22px] mt-2 w-[200px] rounded-md bg-slate-400 animate-pulse" />
      </div>
      {/*  */}
      <div className="grid grid-cols-3 gap-11 mt-9 items-start">
        {[1, 2, 3, 4, 5, 6].map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center text-center gap-1  w-[60px] "
          >
            <button className="px-4 py-4 bg-slate-400 h-full w-full flex items-center justify-center rounded animate-pulse">
              <span className="aspect-square bg-slate-200/10 h-full w-full rounded animate-pulse" />
            </button>
            <span className=" w-[60%] h-[18px] rounded bg-slate-400 animate-pulse" />
          </div>
        ))}
      </div>
      {/*  */}
      <section className="mt-9 w-full flex-col flex gap-4 max-w-[400px]">
        {[1, 2].map((item, idx) => (
          <div
            key={idx}
            className="w-full justify-start flex items-center gap-2 px-4 py-4 h-[57px] rounded bg-slate-400 animate-pulse"
          >
            <button className="px-4 py-4 bg-slate-800/40 aspect-square h-full flex items-center justify-center rounded animate-pulse">
              <span className="aspect-square bg-slate-100 h-full w-full rounded" />
            </button>
            <span className="h-[18px] w-full bg-slate-800/40 rounded animate-pulse" />
          </div>
        ))}
      </section>
    </div>
  );
};

export default loading;
