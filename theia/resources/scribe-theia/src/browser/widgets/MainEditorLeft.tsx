import { Message, ReactWidget } from "@theia/core/lib/browser";
import * as React from "@theia/core/shared/react";

import {
  injectable,
  inject,
  postConstruct,
} from "@theia/core/shared/inversify";
import {
  AbstractViewContribution,
  FrontendApplicationContribution,
  FrontendApplication,
} from "@theia/core/lib/browser";
import { FrontendApplicationStateService } from "@theia/core/lib/browser/frontend-application-state";
import { WorkspaceService } from "@theia/workspace/lib/browser";
import ChapterReading from "../../components/ChapterReading";
import { HelloService } from "../hello-task-contribution";

@injectable()
export class MainEditorLeftWidget extends ReactWidget {
  static readonly ID = "scribe.editor.main.left";
  static readonly LABEL = "Editor Main Left";

  @inject(HelloService)
  protected readonly helloTaskService: HelloService;

  @postConstruct()
  protected init(): void {
    this.doInit();
  }

  protected async doInit(): Promise<void> {
    this.id = MainEditorLeftWidget.ID;
    this.title.label = MainEditorLeftWidget.LABEL;
    this.title.caption = MainEditorLeftWidget.LABEL;
    this.title.closable = false;

    this.update();
  }

  protected override onActivateRequest(msg: Message): void {
    super.onActivateRequest(msg);
    const elArr = this.node.getElementsByTagName("a");
    if (elArr && elArr.length > 0) {
      (elArr[0] as HTMLElement).focus();
    }
  }

  file: File | null = null;
  protected render(): React.ReactNode {
    const handleUpload = async () => {
      if (this.file) {
        const buffer = await this.file.arrayBuffer();
        const uint8Array = new Uint8Array(buffer);
        const res = await this.helloTaskService.testBinary(uint8Array);
        console.log("FRONT END FILE: ", { res });
      }
    };

    return (
      <>
        <div>
          <p>Hello from the left</p>
          <button
            onClick={() => {
              this.helloTaskService
                .greet("Pretty Girls")
                .then((res) => console.log("FRONT END: ", { res }));
              handleUpload().then(() => console.log("FILE SUCCESS"));
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Trigger server function
          </button>

          <input
            type="file"
            name="file"
            id="file"
            onChange={(e) => (this.file = e.target.files?.[0] ?? null)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          />
        </div>
        <ChapterReading
          version="NTV"
          chapterName="Marcos"
          verse="1"
          scripture='Marcos 1 Juan el Bautista prepara el camino &apos; Esta es la Buena Noticia acerca de Jesús el Mesías, el Hijo de Dios. Comenzó 2 tal como el profeta Isaías había escrito: «Mira, envio a mi mensajero delante de ti, y él preparará tu camino. 3 Es una voz que clama en el desierto: "¡Preparen el camino para la venida del Señor! ¡Ábranle camino!"». 4 Ese mensajero era Juan el Bautista. Estaba en el desierto y predicaba que la gente debía ser bautizada para demostrar que se había arrepentido de sus pecados y vuelto a Dios para ser perdonada. 5 Toda la gente de Judea, incluidos los habitantes de Jerusalén, salían para ver y oír a Juan; y cuando confesaban sus pecados, él los bautizaba en el río Jordán.'
        />
      </>
    );
  }
}

@injectable()
export class MainEditorLeftContribution
  extends AbstractViewContribution<MainEditorLeftWidget>
  implements FrontendApplicationContribution
{
  @inject(FrontendApplicationStateService)
  protected readonly stateService: FrontendApplicationStateService;

  @inject(WorkspaceService)
  protected readonly workspaceService: WorkspaceService;

  constructor() {
    super({
      widgetId: MainEditorLeftWidget.ID,
      widgetName: MainEditorLeftWidget.LABEL,
      defaultWidgetOptions: {
        area: "main",
      },
    });
  }

  async onStart(app: FrontendApplication): Promise<void> {
    this.stateService
      .reachedState("ready")
      .then(() => this.openView({ reveal: true, area: "main" }));
  }
}
