import React from 'react'
import ProjectIntroLayout from '../components/ProjectIntro/page'
import ProjectSelector from '../components/ProjectSelector'
import IconTranslate from "@public/icons/translate.svg"
import IconAudio from "@public/icons/audio-lines.svg"
import { IconPolaroid } from '@tabler/icons-react'
import Link from 'next/link'

export default function NewProject() {
  return (
    <ProjectIntroLayout question="What features will your project use?">
<div className="grid grid-cols-3 w-full gap-7">
<Link href="/editor">

<ProjectSelector title="Translation" icon={<IconTranslate
             className=" h-6 w-6"
            />}/>
            </Link>
            <Link href="/editor">

<ProjectSelector title="Audio" icon={<IconAudio
             className="h-6 w-6"
            />}/>
            </Link>
            <Link href="/editor">

            <ProjectSelector title="OBS" icon={<IconPolaroid
    size={24} 
    stroke={1.5}  
    strokeLinejoin="miter"
  />}/>
  </Link>

</div>
  </ProjectIntroLayout>
  )
}
