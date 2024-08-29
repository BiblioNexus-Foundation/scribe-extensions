import { Message, ReactWidget } from "@theia/core/lib/browser";
import * as React from "@theia/core/shared/react";
import { AbstractViewContribution, FrontendApplicationContribution, FrontendApplication } from "@theia/core/lib/browser";
import { FrontendApplicationStateService } from "@theia/core/lib/browser/frontend-application-state";
import { WorkspaceService } from "@theia/workspace/lib/browser";
export declare class BottomEditorLeft extends ReactWidget {
    static readonly ID = "scribe.editor.bottom.left";
    static readonly LABEL = "Editor Main Left";
    protected init(): void;
    protected doInit(): Promise<void>;
    protected onActivateRequest(msg: Message): void;
    protected render(): React.ReactNode;
}
export declare class BottomEditorLeftContribution extends AbstractViewContribution<BottomEditorLeft> implements FrontendApplicationContribution {
    protected readonly stateService: FrontendApplicationStateService;
    protected readonly workspaceService: WorkspaceService;
    constructor();
    onStart(app: FrontendApplication): Promise<void>;
}
//# sourceMappingURL=BottomEditorLeft.d.ts.map