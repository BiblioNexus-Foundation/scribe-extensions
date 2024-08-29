import { Message, ReactWidget } from "@theia/core/lib/browser";
import * as React from "@theia/core/shared/react";
import { AbstractViewContribution, FrontendApplicationContribution, FrontendApplication } from "@theia/core/lib/browser";
import { FrontendApplicationStateService } from "@theia/core/lib/browser/frontend-application-state";
import { WorkspaceService } from "@theia/workspace/lib/browser";
export declare class MainEditorRightWidget extends ReactWidget {
    static readonly ID = "scribe.editor.main.right";
    static readonly LABEL = "Editor Main Right";
    protected init(): void;
    protected doInit(): Promise<void>;
    protected onActivateRequest(msg: Message): void;
    protected render(): React.ReactNode;
}
export declare class MainEditorRightContribution extends AbstractViewContribution<MainEditorRightWidget> implements FrontendApplicationContribution {
    protected readonly stateService: FrontendApplicationStateService;
    protected readonly workspaceService: WorkspaceService;
    constructor();
    onStart(app: FrontendApplication): Promise<void>;
}
//# sourceMappingURL=MainEditorRight.d.ts.map