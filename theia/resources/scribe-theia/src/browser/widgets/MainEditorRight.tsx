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

@injectable()
export class MainEditorRightWidget extends ReactWidget {
  static readonly ID = "scribe.editor.main.right";
  static readonly LABEL = "Editor Main Right";

  @postConstruct()
  protected init(): void {
    this.doInit();
  }

  protected async doInit(): Promise<void> {
    this.id = MainEditorRightWidget.ID;
    this.title.label = MainEditorRightWidget.LABEL;
    this.title.caption = MainEditorRightWidget.LABEL;
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
  protected render(): React.ReactNode {
    return (
      <>
        <ChapterReading
          version="NLT"
          chapterName="Mark"
          verse="1"
          scripture="John the Baptist Prepares the Way
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
confessed their sins, he baptized them in the Jordan River."
        />
      </>
    );
  }
}

@injectable()
export class MainEditorRightContribution
  extends AbstractViewContribution<MainEditorRightWidget>
  implements FrontendApplicationContribution
{
  @inject(FrontendApplicationStateService)
  protected readonly stateService: FrontendApplicationStateService;

  @inject(WorkspaceService)
  protected readonly workspaceService: WorkspaceService;

  constructor() {
    super({
      widgetId: MainEditorRightWidget.ID,
      widgetName: MainEditorRightWidget.LABEL,
      defaultWidgetOptions: {
        area: "main",
        mode: "split-right",
      },
    });
  }

  async onStart(app: FrontendApplication): Promise<void> {
    this.stateService
      .reachedState("ready")
      .then(() =>
        this.openView({ reveal: true, area: "main", mode: "split-right" })
      );
  }
}
