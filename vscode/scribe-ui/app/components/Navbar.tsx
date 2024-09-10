import React from 'react'
import WhiteLogo from "@public/icons/white-logo.svg"
import BlackLogo from "@public/icons/black-logo.svg"

import Button from './Button'
import { IconUpload, IconArrowsDownUp,IconBell,IconLock, IconLetterCase, IconLayout, IconCloudUpload, IconExclamationCircle, IconSun, IconMoon } from '@tabler/icons-react';
import { Badge } from './ui/Badge';
import useColorMode from '../../hooks/useColorMode';

export default function Navbar({isCustom}:{isCustom:boolean}) {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <nav  className=
        "Nav fixed top-0 z-30  flex h-[3.75rem] dark:border-zinc-900 border-zinc-200  px-5 border-b w-full items-center justify-between"
    >
{
            colorMode == "dark" ? (
<WhiteLogo  />
            ) : (
<BlackLogo  />
            )
          }
<div className='flex items-center gap-x-2.5'>
<Button label='Import' icon={<IconUpload
    size={14} 
    stroke={2}  
    strokeLinejoin="miter"
  />}/>
{ isCustom && <>
  <Button label='Save' icon={<IconCloudUpload
    size={14} 
    stroke={2}  
    strokeLinejoin="miter"
  />}/>
    <Button label='Layout' icon={<IconLayout
    size={14} 
    stroke={2}  
    strokeLinejoin="miter"
  />}/>
    <Button label='Font Size' icon={<IconLetterCase
    size={14} 
    stroke={2}  
    strokeLinejoin="miter"
  />}/>
   <Button  className="dark:bg-cyan-500 bg-cyan-400 hover:bg-cyan-500 dark:hover:bg-cyan-400 text-zinc-800 dark:text-black  dark:border-cyan-700" icon={<IconLock
    size={14} 
    stroke={2}  
    strokeLinejoin="miter"
  />}/>
  </>}
  <Button label='Sync' icon={<IconArrowsDownUp
    size={14} 
    stroke={2}  
    strokeLinejoin="miter"
  />}/>
{ isCustom && <div className='relative'>
   <Button icon={<IconBell
    size={14} 
    stroke={2}  
    strokeLinejoin="miter"
  />}/>
  <Badge variant="secondary" className='absolute -top-1 -right-1 '>4</Badge>

  </div>}
   <Button icon={<IconExclamationCircle
    size={14} 
    stroke={2}  
    strokeLinejoin="miter"
  />}/>
  <p className='font-normal dark:text-zinc-50 text-zinc-700  tracking-wide text-sm'>Hey, </p>
  <span className="flex min-h-7 min-w-7 items-center justify-center rounded-full">
            <picture>
              <img
                crossOrigin="anonymous"
                src="/images/avatar.png"
                alt="avatar"
                className="h-7 w-7 rounded-full object-cover"
              />{" "}
            </picture>
          </span>
          <p className='font-semibold dark:text-zinc-50 text-zinc-700 tracking-wide text-sm'>John</p>
          <Button           onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
  icon={
            colorMode == "dark" ? (
              <IconSun size={14} stroke={2} strokeLinejoin="miter" />
            ) : (
              <IconMoon size={14} stroke={1.5} strokeLinejoin="miter" />
            )
          }/>
  </div>
    </nav>
  )
}
