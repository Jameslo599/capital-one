import React from "react";

function StarRate(props) {
  const fill = props.fill || "currentColor";
  const secondaryfill = props.secondaryfill || fill;
  const width = props.width || "20px";
  const height = props.height || "100%";

  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={secondaryfill}>
        <path
          d="M23.974,9.341c-.069-.204-.259-.341-.474-.341H15.22L12.477,.349c-.132-.415-.821-.415-.953,0l-2.744,8.651H.5c-.215,0-.405,.137-.474,.341-.068,.204,0,.428,.172,.558l6.598,5-2.745,8.447c-.067,.206,.006,.432,.182,.559,.176,.128,.412,.128,.588,0l7.18-5.215,7.18,5.215c.088,.064,.191,.096,.294,.096s.206-.032,.294-.096c.175-.127,.249-.353,.182-.559l-2.745-8.447,6.598-5c.171-.13,.24-.354,.172-.558Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default StarRate;
