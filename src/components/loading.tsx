import React from 'react';
import logo from "../assets/images/logo.png"

type Props = {
  loading?: boolean,
  children?: React.ReactComponentElement<never> | React.ReactElement
}
function Loading({ loading= true, children }: Props) {
  if (!loading) return (children || <></>)
  return (
    <div className="w-full h-full flex justify-center items-center pt-20">
      <style>
        {`
          @keyframes scale {
            0% { transform: scale(0.5) }
            100% { transform: scale(1) }
          }

          .animate-scale {
            animation: scale 0.8s ease-out infinite alternate;
          }
        `}
      </style>
      <div className="animate-scale">
        <img src={logo} alt="Estate-Plus" width={60} />
      </div>
      <div className="w-32 h-32 rounded-full border-r-2 border-primary absolute animate-spin"></div>
    </div>
  );
}

export default Loading;
