import React, { ReactNode } from 'react'
import { Buttons } from './ui/Button'
export default function Button({
    label,
    icon,
    size,
    className,
    onClick,


  }: {label?:string;icon?:ReactNode;className?:string;   onClick?: () => void;
    size?:"default" | "sm" | "lg" | "icon"}) {
  return (
    <Buttons onClick={onClick} size={size} className={className} variant="outline">  
    {icon}
    {label}
  </Buttons>

  )
}
