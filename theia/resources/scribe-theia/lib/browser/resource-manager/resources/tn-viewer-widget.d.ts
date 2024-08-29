import { AbstractViewContribution, FrontendApplicationContribution, ReactWidget } from "@theia/core/lib/browser";
import React from "@theia/core/shared/react";
import { URI } from "@theia/core";
import { FileService } from "@theia/filesystem/lib/browser/file-service";
export declare class TnViewerWidget extends ReactWidget {
    static readonly ID = "tn-viewer-widget";
    private uri;
    private tnTsv;
    constructor();
    protected readonly fs: FileService;
    protected onUpdateRequest(msg: any): void;
    setUri(uri: URI): void;
    render(): React.JSX.Element;
}
export declare class TnViewerWidgetFrontendContribution extends AbstractViewContribution<TnViewerWidget> implements FrontendApplicationContribution {
    constructor();
    protected init(): void;
    initializeLayout(): Promise<void>;
}
//# sourceMappingURL=tn-viewer-widget.d.ts.map