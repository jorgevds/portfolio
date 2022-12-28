import React, { useEffect } from "react";
import mermaid from "mermaid";
import { useReconcileHydration } from "../../lib/utils/reconcile-hydration.hook";

mermaid.initialize({
    startOnLoad: true,
});

type DiagramProps = {
    children: React.ReactNode;
};

export const Mermaid: React.FC<DiagramProps> = ({ children }) => {
    const clientReconciled: boolean = useReconcileHydration();

    useEffect(() => {
        mermaid.contentLoaded();
    }, [clientReconciled]);

    return clientReconciled ? <>{children}</> : <></>;
};
