import { createElement } from "react";

export function preview({ contentWidgets }) {
    const ContentRenderer = contentWidgets.renderer;

    return (
        <div className="collapsible-datagrid-preview">
            <ContentRenderer caption="Place content widgets inside.">
                <div className="collapsible-datagrid-preview-content" />
            </ContentRenderer>
        </div>
    );
}

export function getPreviewCss() {
    return require("./ui/CollapsibleDatagridTwo.css");
}