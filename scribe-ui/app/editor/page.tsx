import React, { createContext } from 'react';
import { IconPlayerPlayFilled, IconPhoto, IconMicrophone } from "@tabler/icons-react"
import Button from "../components/Button"
import IconWaveForm from "@public/icons/wave-form.svg"
import IconVolume from "@public/icons/volume.svg"

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "../components/ui/Resizable"
import ChapterReading from "./ChapterReading"
import QuestionCard from "./QuestionCard"
import { Textarea } from "../components/ui/TextArea"
import { ScrollArea, ScrollBar } from "../components/ui/ScrollArea"
import { Badge } from "../components/ui/Badge"
  
  export default function Editor() {
  
    return (
        <div className="w-screen flex flex-col h-[calc(100vh-60px)] ">
              <ResizablePanelGroup
      direction="horizontal"
      className="w-full"
    >
      <ResizablePanel defaultSize={75}>
      <ResizablePanelGroup
      direction="vertical"
      className="w-full"
    >
      <ResizablePanel defaultSize={58}>
      <ResizablePanelGroup
        direction="horizontal"
        className="w-full "
      >
        <ResizablePanel defaultSize={50}>
        <ChapterReading version="NTV" chapterName="Marcos" verse="1" scripture="Marcos 1 Juan el Bautista prepara el camino ' Esta es la Buena Noticia acerca de Jesús el Mesías, el Hijo de Dios. Comenzó 2 tal como el profeta Isaías había escrito: «Mira, envio a mi mensajero delante de ti, y él preparará tu camino. 3 Es una voz que clama en el desierto: &quot;¡Preparen el camino para la venida del Señor! ¡Ábranle camino!&quot;». 4 Ese mensajero era Juan el Bautista. Estaba en el desierto y predicaba que la gente debía ser bautizada para demostrar que se había arrepentido de sus pecados y vuelto a Dios para ser perdonada. 5 Toda la gente de Judea, incluidos los habitantes de Jerusalén, salían para ver y oír a Juan; y cuando confesaban sus pecados, él los bautizaba en el río Jordán." />
        </ResizablePanel>
        <ResizableHandle withHandle  />
        <ResizablePanel defaultSize={50}>
        <ChapterReading version="NLT" chapterName="Mark" verse="1" scripture="John the Baptist Prepares the Way
1 This is the Good News about Jesus the Messiah, the Son of God. It began 2
just as the prophet Isaiah had written:
&quot;Look, I am sending my messenger ahead of you,
and he will prepare your way.
3 He is a voice shouting in the wilderness,
'Prepare the way for the Lord's coming!
Clear the road for him!&quot;
4 This messenger was John the Baptist. He was in the wilderness and
preached that people should be baptized to show that they had repented of
their sins and turned to God to be forgiven. 5 All of Judea, including all the
people of Jerusalem, went out to see and hear John. And when they
confessed their sins, he baptized them in the Jordan River." />
        </ResizablePanel>

      </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={42}>
      <ResizablePanelGroup
      direction="horizontal"
      className="w-full"
    >
      <ResizablePanel defaultSize={68}>
      <ResizablePanelGroup
      direction="vertical"
      className="w-full"
    >
      <ResizablePanel defaultSize={50}>
        <div className="px-5 py-2.5 space-y-5">
          <div className="flex items-center gap-2">
          <Badge variant="destructive">Mark 1:9</Badge>
<p className="tracking-wide text-xs font-semibold text-zinc-300 dark:text-zinc-700">Alignment</p>
          </div>
          <p className="dark:text-zinc-50 text-zinc-700 text-sm  font-medium tracking-wide leading-4">Cierto dia, Jesús llegó de Nazaret de Galilea, y Juan lo bautizó en el rio Jordán.</p>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel className="p-5" defaultSize={50}>
      <p className="dark:text-zinc-50 text-zinc-700 dark:selection:bg-emerald-500 selection:bg-emerald-100  text-sm tracking-wide font-medium leading-4"><span className="dark:bg-emerald-500 bg-emerald-100">One day Jesus</span> went from <span className="dark:bg-emerald-500 bg-emerald-100">Nazareth</span> in <span className="dark:bg-emerald-500 bg-emerald-100">Galilee, </span> and James I baptized him in the river.</p>
      </ResizablePanel>
    </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel className='p-2.5' defaultSize={32}>
        <p className='font-semibold text-xs text-center tracking-wide leading-4 dark:text-zinc-50 text-zinc-700'>Tsv translation notes english</p>
        <div className='mt-2.5 rounded-lg flex items-center justify-between gap-[5px] dark:bg-zinc-900 bg-zinc-200  p-[5px]'>
        <Button label='Book'  className="dark:bg-zinc-800 bg-zinc-50 hover:bg-zinc-100 dark:text-zinc-50 text-zinc-700 w-1/3 uppercase font-semibold" />
        <Button label='Chapter'  className="dark:bg-zinc-800 bg-zinc-50 hover:bg-zinc-100 dark:text-zinc-50 text-zinc-700 w-1/3 uppercase font-semibold"  />
        <Button label='Verse'  className="dark:bg-zinc-800 bg-zinc-50 hover:bg-zinc-100 dark:text-zinc-50 text-zinc-700 w-1/3 uppercase font-semibold"  />

        </div>
        <article className='dark:text-zinc-50 px-2 text-zinc-700 leading-[18px] mt-2.5   text-xs tracking-wide text-center whitespace-pre-line'>
1:9b and was baptized by John in the Jordan.
and [then] John baptized Jesus/him in the
Jordan [River].
-OR-
• [When he arrived at the place where John was
preaching,| John baptized him in the Jordan
[River].</article>
        <div>
  
      </div>
      </ResizablePanel>
    </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={25}>
      <ScrollArea className="w-full h-full overflow-y-auto pb-2">
      <ScrollBar orientation="vertical" />

        <div className='flex items-center sticky dark:bg-zinc-950 bg-white  top-0 z-20 gap-[5px] border-b py-2.5 px-2 dark:border-zinc-900 border-zinc-200 justify-center'>
      <Button label="Discuss" className="dark:border-cyan-900 bg-cyan-100 hover:bg-cyan-200 dark:bg-cyan-950  border-cyan-300 text-cyan-700" />
  <Button label="Suggest" />
   <Button label="Checks" 
  />
    </div>
    <div className="space-y-2.5   px-5 py-2.5">
<QuestionCard isAudio/>
<QuestionCard isImage/>
<QuestionCard/>
<QuestionCard/>

<QuestionCard/>

<div className=" absolute bottom-0 pt-4 pb-[11px] bg-white dark:bg-zinc-950 w-full left-0 px-5">
    <div className="relative">
 <Textarea className="h-20" placeholder="Ask AI Bot some questions" /> 
 <div className="flex absolute bottom-2.5 right-2.5 items-center gap-2.5">
 <Button size="icon" className="dark:bg-cyan-500 bg-cyan-400 hover:bg-cyan-500 dark:hover:bg-cyan-400 text-zinc-800 dark:text-black  dark:border-cyan-700" icon={<IconPhoto
    size={12} 
    stroke={2}  
    strokeLinejoin="miter"
  />}/>
   <Button size="icon" className="dark:bg-cyan-500 bg-cyan-400 hover:bg-cyan-500 dark:hover:bg-cyan-400 text-zinc-800 dark:text-black  dark:border-cyan-700" icon={<IconMicrophone
    size={12} 
    stroke={2}  
    strokeLinejoin="miter"
  />}/>
   <Button size="icon" className="dark:bg-cyan-500 bg-cyan-400 hover:bg-cyan-500 dark:hover:bg-cyan-400 text-zinc-800 dark:text-black  dark:border-cyan-700" icon={<IconPhoto
    size={12} 
    stroke={2}  
    strokeLinejoin="miter"
  />}/>

    </div>  
 </div>
</div>

    </div>
    </ScrollArea>
      </ResizablePanel>
    </ResizablePanelGroup>
          
<div className="p-3 flex items-center border-t border-zinc-200 dark:border-zinc-900 justify-end">
<Badge >saved 5 mins ago</Badge>
</div>
        </div>
     
    )
  }
  