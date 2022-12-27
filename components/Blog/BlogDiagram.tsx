import React, { useLayoutEffect } from "react";
import mermaid from "mermaid";

mermaid.initialize({
    startOnLoad: true,
});

type DiagramProps = {
    children: React.ReactNode;
};

export const Mermaid: React.FC<DiagramProps> = ({ children }) => {
    useLayoutEffect(() => {
        mermaid.contentLoaded();
    }, []);

    return <>{children}</>;
};
