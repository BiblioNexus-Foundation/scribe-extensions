import React from 'react'
import { Badge } from '../components/ui/Badge'
import { IconUpload, IconSettings, IconExclamationCircle } from '@tabler/icons-react';
import Button from '../components/Button';

export default function ChapterReading({version,chapterName, verse, scripture }:{version: string; chapterName:string; verse:string; scripture:string}) {
  return (
    <div>
      <div className='flex items-center border-b py-2.5 px-2 dark:border-zinc-900 border-zinc-200 justify-between'>
      <Badge variant="destructive">{version}</Badge>
      <div className='flex items-center gap-[5px]'>
      <Button label={chapterName} />
  <Button label={verse} />
   <Button icon={<IconSettings
    size={14} 
    stroke={2}  
    strokeLinejoin="miter"
  />}/>
        </div>      </div>
        <div className='mt-2.5 font-normal space-y-2 mx-auto max-w-md'>
            <h2 className='text-cyan-500 leading-5 text-center text-xl tracking-wide'>{`${chapterName} ${verse}`}</h2>
            <article className='dark:text-zinc-50 text-zinc-700 leading-5   text-xs tracking-wide text-center whitespace-pre-line'>
{scripture}</article>
        </div>
    </div>
  )
}
