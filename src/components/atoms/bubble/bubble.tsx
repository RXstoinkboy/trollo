import React, { ReactElement, SVGProps } from "react";

export default function Bubble(props: SVGProps<SVGSVGElement>): ReactElement {
  return (
    <svg width={60} height={60} fill="none" {...props}>
      <circle cx={30} cy={30} r={30} fill="#D45B5B" />
    </svg>
  );
}
