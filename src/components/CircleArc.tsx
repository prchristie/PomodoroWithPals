"use client";

export const CircleArc = (props: {
  size: number;
  strokeWidth: number;
  stroke: string;
  counterClockwise?: boolean;
  background?: string;
  complete: number;
}) => {
  var size = props.size,
    strokeWidth = props.strokeWidth,
    stroke = props.stroke,
    counterClockwise = props.counterClockwise,
    background = props.background,
    complete = props.complete,
    offset = /firefox/i.test(navigator.userAgent) ? -89.9 : -90,
    strokeWidthCapped = Math.min(strokeWidth, size / 2 - 1),
    radius = Math.max((size - strokeWidthCapped) / 2 - 1, 0),
    circumference = 2 * Math.PI * radius,
    backgroundElement,
    transform = "rotate(" + offset + ", " + size / 2 + ", " + size / 2 + ")";

  if (background !== null) {
    backgroundElement = (
      <circle
        fill="none"
        cx={size / 2 + "px"}
        cy={size / 2 + "px"}
        r={radius + "px"}
        stroke={background}
        strokeWidth={strokeWidthCapped}
      />
    );
  }

  if (counterClockwise) {
    transform += " translate(0, " + size + ") scale(1, -1)";
  }

  return (
    <svg
      fill="none"
      cx={size / 2 + "px"}
      cy={size / 2 + "px"}
      r={radius + "px"}
      stroke={stroke}
      strokeWidth={strokeWidthCapped}
      strokeDasharray={circumference}
      style={{ strokeDashoffset: (1 - complete) * circumference }}
      transform={transform}
    >
      {backgroundElement}
    </svg>
  );
};
