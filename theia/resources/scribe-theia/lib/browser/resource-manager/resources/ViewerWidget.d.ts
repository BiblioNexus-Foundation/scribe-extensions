import { AbstractViewContribution, FrontendApplicationContribution, ReactWidget } from "@theia/core/lib/browser";
import React from "@theia/core/shared/react";
export declare class ViewerWidget extends ReactWidget {
    static readonly ID = "resource-viewer-widget";
    constructor();
    protected onUpdateRequest(msg: any): void;
    render(): React.JSX.Element;
}
export declare class ViewerWidgetFrontendContribution extends AbstractViewContribution<ViewerWidget> implements FrontendApplicationContribution {
    constructor();
    protected init(): void;
    initializeLayout(): Promise<void>;
}
//# sourceMappingURL=ViewerWidget.d.ts.map