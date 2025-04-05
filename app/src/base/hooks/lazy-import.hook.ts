import { ComponentType, lazy, useMemo } from "react";

const useLazyImport = <T extends ComponentType>(
  factory: () => Promise<{ default: T }>
) => {
  const load = useMemo(() => {
    return lazy(() => {
      return factory().then((resource) => {
        return resource;
      });
    });
  }, []);

  return load;
};

export default useLazyImport;
