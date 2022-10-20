import { ReactNode } from "react";
import { IconWrapper } from "./styles";

interface IconProps {
  icon: ReactNode;
  backgroundColor: string;
}

export const Icon = ({ icon, backgroundColor }: IconProps) => {
  return <IconWrapper backgroundColor={backgroundColor}>{icon}</IconWrapper>;
};
