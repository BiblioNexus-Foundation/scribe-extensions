import Image from "next/image";
import Search from "./components/ui/Search";
import ProjectSelector from "./components/ProjectSelector";
import  IconBooks from "@public/icons/books.svg"
import  IconCubePlus from "@public/icons/new-project.svg"
import ProjectIntroLayout from "./components/ProjectIntro/page";
import Link from "next/link";


export default function Home() {
  return (
    <ProjectIntroLayout question="What would you like to work on today?">
      <><Search className="w-[25vw]" />
<div className="grid grid-cols-2 w-full gap-10">
<ProjectSelector title="Open project" icon={<IconBooks
             className=" h-6 w-6"
            />}/>
            <Link href="/new-project">
<ProjectSelector title="New project" icon={<IconCubePlus
             className="h-6 w-6"
            />}/>
            </Link>

</div></>
    </ProjectIntroLayout>

  );
}
