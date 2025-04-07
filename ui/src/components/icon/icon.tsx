import * as Icons from "@phosphor-icons/react";
import { FC } from "react";
import { IconProps } from "./types";

const Icon: FC<IconProps> = ({ icon, className }) => {
  const IconComponent = Icons[icon] as Icons.Icon;
  return <IconComponent className={className || ""} weight="light" />;
};

export default Icon;
