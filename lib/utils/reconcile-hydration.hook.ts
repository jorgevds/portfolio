import { useEffect, useState } from "react";

export const useReconcileHydration = () => {
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    return hydrated ? true : false;
};
