const ExceptionalTitle = () => {
  return (
    <div className="w-full flex justify-center lg:-translate-x-17 xl:translate-x-0">
      <svg viewBox="0 0 1000 150" className="w-full h-[150px]">
        <defs>
          <symbol id="exceptional-text">
            <text
              x="50%"
              y="70%"
              textAnchor="middle"
              className="font-black text-[90px] md:text-[130px] font-sans"
            >
              تخفیف استثنایی
            </text>
          </symbol>

          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g>
          <use
            xlinkHref="#exceptional-text"
            className="text-stroke stroke-anim"
            filter="url(#glow)"
          />
          <use
            xlinkHref="#exceptional-text"
            className="text-fill fill-fade"
          />
        </g>
      </svg>
    </div>
  );
};

export default ExceptionalTitle;
