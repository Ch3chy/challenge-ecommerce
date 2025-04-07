import * as Icons from "@phosphor-icons/react";

export type IconNames = keyof typeof Icons;

export interface IconProps {
  icon: IconNames;
  className?: string;
}
