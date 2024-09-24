import * as React from "@theia/core/shared/react";
import { Buttons, type ButtonProps } from "./ui/Button";
export default function Button({
  label,
  icon,
  size,
  className,
  onClick,
  ...rest
}: {
  label?: string;
  icon?: React.ReactNode;
  size?: "default" | "sm" | "lg" | "icon";
} & ButtonProps) {
  return (
    <Buttons
      {...rest}
      onClick={onClick}
      size={size}
      className={className}
      variant="outline"
    >
      {icon}
      {label}
    </Buttons>
  );
}
