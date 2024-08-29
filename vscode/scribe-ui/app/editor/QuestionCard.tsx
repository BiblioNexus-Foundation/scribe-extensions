import { IconPlayerPlayFilled, IconMessage   } from "@tabler/icons-react"
import Button from "../components/Button"
import IconWaveForm from "@public/icons/wave-form.svg"
import IconVolume from "@public/icons/volume.svg"
import Image from "next/image";
import { Badge } from "../components/ui/Badge";

export default function QuestionCard({isAudio, isImage}:{isAudio?:boolean; isImage?:boolean}) {
  return (
    <>
{  isAudio ?  (<div className="rounded-3xl space-y-3  relative  dark:bg-zinc-900 bg-zinc-100 py-3 px-5 font-normal">
  <Badge variant="rounded" className="absolute  -top-2 -left-4 z-5">
  <IconMessage size={12} stroke={1.5} strokeLinejoin="miter" />

  </Badge>
    <div className="flex items-center text-zinc-400 dark:text-zinc-500 text-sm  font-normal justify-between">
        <span className="h-8 w-8 flex items-center cursor-pointer rounded-full text-zinc-800 dark:text-black bg-cyan-400 dark:bg-cyan-500 justify-center">
        <IconPlayerPlayFilled
        size={18} 
        stroke={2}  
        strokeLinejoin="miter"
      />
        </span>
        <IconWaveForm
       className="w-20 h-8 fill-zinc-500"
      />
      <span className="leading-4 tracking-wide">0:05</span>
      <IconVolume
           className="w-6 h-6 cursor-pointer fill-zinc-500"
    
      />
    </div>
    <p className="text-[10px] leading-[14px] text-zinc-400 dark:text-zinc-50 tracking-wide">Varius tellus fermentum blandit purus ornare magna. Vel pulvinar non felis pellentesque sit. Convallis mi habitant id risus tellus at. </p>
    
            </div>):(isImage ? <div className="rounded-3xl  relative gap-2.5 w-full  flex  dark:bg-zinc-900 bg-zinc-100 py-3 px-5 font-normal">
            <Badge variant="rounded" className="absolute  -top-2 -left-4 z-5">
  <IconMessage size={12} stroke={1.5} strokeLinejoin="miter" />

  </Badge>
            <span className="flex min-h-7 min-w-7   rounded-full">
            <picture>
              <img
                crossOrigin="anonymous"
                src="/images/ellipse.png"
                alt="avatar"
                className="h-7 w-7 rounded-full object-cover"
              />{" "}
            </picture>
          </span>
    <div className="space-y-1 w-full  dark:text-zinc-500 text-zinc-400 text-[10px]  font-normal ">
        <span className="flex uppercase leading-3 font-medium w-full justify-between ">
       <span>Steve David</span>
       <span className="ml-auto">Mark 1:23</span>

        </span>
        
        <div className="question-image relative min-h-20 max-h-20 w-full">
        <Image
          src=
           "/images/cathedral.png"
          
          alt="org Image"
          layout="fill"
          objectFit="cover"
          className="rounded-[10px] w-full"
        />
      </div>
      <p className="font-normal tracking-wide leading-[14px] text-[10px] text-zinc-700 dark:text-zinc-50">Example of picture</p>
    </div>
  
    
            </div>:<div className="rounded-3xl  gap-2.5  w-full relative  flex  dark:bg-zinc-900 bg-zinc-100 py-3 px-5 font-normal">
            <Badge variant="rounded" className="absolute  -top-2 -left-4 z-5">
  <IconMessage size={12} stroke={1.5} strokeLinejoin="miter" />

  </Badge>
            <span className="flex min-h-7 min-w-7   rounded-full">
            <picture>
              <img
                crossOrigin="anonymous"
                src="/images/user.png"
                alt="avatar"
                className="h-7 w-7 rounded-full object-cover"
              />{" "}
            </picture>
          </span>
    <div className="space-y-1 w-full text-zinc-400 dark:text-zinc-500 text-[10px]  font-normal ">
        <span className="flex uppercase leading-3 font-medium w-full justify-between ">
       <span>Brian Ineza</span>
       <span className="ml-auto">Mark 1:23</span>

        </span>
        

      <p className="font-normal tracking-wide leading-[14px] text-[10px] text-zinc-700 dark:text-zinc-50">Varius tellus fermentum blandit purus ornare magna. Vel pulvinar non felis pellentesque sit. Convallis mi habitant id risus tellus at. </p>
    </div>
  
    
            </div>)}
            </>
  )
}
