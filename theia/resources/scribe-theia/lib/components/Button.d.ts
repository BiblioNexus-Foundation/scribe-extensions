import * as React from "@theia/core/shared/react";
export default function Button({ label, icon, size, className, onClick, }: {
    label?: string;
    icon?: React.ReactNode;
    className?: string;
    onClick?: () => void;
    size?: "default" | "sm" | "lg" | "icon";
}): React.JSX.Element;
//# sourceMappingURL=Button.d.ts.map