import { Message, ReactWidget } from "@theia/core/lib/browser";
import * as React from "@theia/core/shared/react";

import {
  injectable,
  inject,
  postConstruct,
} from "@theia/core/shared/inversify";
import { CommandRegistry, MenuModelRegistry } from "@theia/core/lib/common";
import {
  CommonMenus,
  AbstractViewContribution,
  FrontendApplicationContribution,
  FrontendApplication,
} from "@theia/core/lib/browser";
import { FrontendApplicationStateService } from "@theia/core/lib/browser/frontend-application-state";
import { WorkspaceService } from "@theia/workspace/lib/browser";
import { ScrollArea, ScrollBar } from "../../components/ui/ScrollArea";
import Button from "../../components/Button";
import { IconMicrophone, IconPhoto } from "@tabler/icons-react";
import { Textarea } from "../../components/ui/TextArea";
import QuestionCard from "../../components/QuestionCard";

@injectable()
export class AiSidebar extends ReactWidget {
  static readonly ID = "scribe.ai-sidebar";
  static readonly LABEL = "AI Sidebar";

  @postConstruct()
  protected init(): void {
    this.doInit();
  }

  protected async doInit(): Promise<void> {
    this.id = AiSidebar.ID;
    this.title.label = AiSidebar.LABEL;
    this.title.caption = AiSidebar.LABEL;
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
      <ScrollArea className="w-full h-full overflow-y-auto pb-2">
        <ScrollBar orientation="vertical" />

        <div className="flex items-center sticky dark:bg-zinc-950 bg-white  top-0 z-20 gap-[5px] border-b py-2.5 px-2 dark:border-zinc-900 border-zinc-200 justify-center">
          <Button
            label="Discuss"
            className="dark:border-cyan-900 bg-cyan-100 hover:bg-cyan-200 dark:bg-cyan-950  border-cyan-300 text-cyan-700"
          />
          <Button label="Suggest" />
          <Button label="Checks" />
        </div>
        <div className="space-y-2.5   px-5 py-2.5">
          <QuestionCard isAudio />
          <QuestionCard isImage />
          <QuestionCard />
          <QuestionCard />

          <QuestionCard />

          <div className=" absolute bottom-0 pt-4 pb-[11px] bg-white dark:bg-zinc-950 w-full left-0 px-5">
            <div className="relative">
              <Textarea
                className="h-20"
                placeholder="Ask AI Bot some questions"
              />
              <div className="flex absolute bottom-2.5 right-2.5 items-center gap-2.5">
                <Button
                  size="icon"
                  className="dark:bg-cyan-500 bg-cyan-400 hover:bg-cyan-500 dark:hover:bg-cyan-400 text-zinc-800 dark:text-black  dark:border-cyan-700"
                  icon={
                    <IconPhoto size={12} stroke={2} strokeLinejoin="miter" />
                  }
                />
                <Button
                  size="icon"
                  className="dark:bg-cyan-500 bg-cyan-400 hover:bg-cyan-500 dark:hover:bg-cyan-400 text-zinc-800 dark:text-black  dark:border-cyan-700"
                  icon={
                    <IconMicrophone
                      size={12}
                      stroke={2}
                      strokeLinejoin="miter"
                    />
                  }
                />
                <Button
                  size="icon"
                  className="dark:bg-cyan-500 bg-cyan-400 hover:bg-cyan-500 dark:hover:bg-cyan-400 text-zinc-800 dark:text-black  dark:border-cyan-700"
                  icon={
                    <IconPhoto size={12} stroke={2} strokeLinejoin="miter" />
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    );
  }
}

/**
 * Triggers opening the `AiSidebar`.
 */
export const AiSidebarCommand = {
  id: AiSidebar.ID,
  label: AiSidebar.LABEL,
};

@injectable()
export class AiSidebarContribution
  extends AbstractViewContribution<AiSidebar>
  implements FrontendApplicationContribution
{
  @inject(FrontendApplicationStateService)
  protected readonly stateService: FrontendApplicationStateService;

  @inject(WorkspaceService)
  protected readonly workspaceService: WorkspaceService;

  constructor() {
    super({
      widgetId: AiSidebar.ID,
      widgetName: AiSidebar.LABEL,
      defaultWidgetOptions: {
        area: "right",
      },
    });
  }

  async onStart(app: FrontendApplication): Promise<void> {
    this.stateService
      .reachedState("ready")
      .then(() => this.openView({ reveal: true }));
  }

  override registerCommands(registry: CommandRegistry): void {
    registry.registerCommand(AiSidebarCommand, {
      execute: () => this.openView({ reveal: true }),
    });
  }

  override registerMenus(menus: MenuModelRegistry): void {
    menus.registerMenuAction(CommonMenus.HELP, {
      commandId: AiSidebarCommand.id,
      label: AiSidebarCommand.label,
      order: "a10",
    });
  }
}
