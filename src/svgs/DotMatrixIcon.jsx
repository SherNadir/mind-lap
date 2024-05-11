export const DotMatrixIcon = (props) => {
  return (
    <svg
      width="168"
      height="18"
      viewBox="0 0 168 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d_260_3410)">
        <rect x="4" width="20" height="10" rx="5" fill="#75D481" />
        <circle cx="47" cy="5" r="5" fill="#75D481" />
        <circle cx="75" cy="5" r="5" fill="#75D481" />
        <circle cx="103" cy="5" r="5" fill="#75D481" />
        <circle cx="131" cy="5" r="5" fill="#75D481" />
        <circle cx="159" cy="5" r="5" fill="#75D481" />
      </g>
      <defs>
        <filter
          id="filter0_d_260_3410"
          x="0"
          y="0"
          width="168"
          height="18"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_260_3410"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_260_3410"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
