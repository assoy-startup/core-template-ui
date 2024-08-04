import React from "react";
import { ReactSVG } from "react-svg";
import ReactTooltip from "react-tooltip";

export default function SvgIcon(props) {
  const {
    src,
    className,
    classes,
    onClick,
    style,
    type,
    tooltip,
    id,
    placement,
    disabled,
  } = props;
  return (
    <div>
      <ReactSVG
        src={src}
        data-for={id}
        data-tip={id}
        className={className}
        beforeInjection={(svg) => {
          svg.classList.add(type === "expand" ? "rowFlex" : "rowFlex", classes),
            svg.setAttribute("style", style);
        }}
        onClick={onClick}
      />
      {tooltip ? (
        <ReactTooltip
          className="reacttooltipMini"
          id={id}
          data-place={placement}
          effect="solid"
          place={placement}
          data-effect="solid"
        >
          {tooltip}
        </ReactTooltip>
      ) : null}
    </div>
  );
}
