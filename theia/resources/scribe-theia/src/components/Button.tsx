import * as React from "@theia/core/shared/react";
import { Buttons } from "./ui/Button";
export default function Button({
  label,
  icon,
  size,
  className,
  onClick,
}: {
  label?: string;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  size?: "default" | "sm" | "lg" | "icon";
}) {
  return (
    <Buttons
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
