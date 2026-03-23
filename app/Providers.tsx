"use client";

import { TinaCMS, TinaProvider } from "tinacms";
import { useMemo } from "react";
import { GitClient } from "@tinacms/git-client";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  const cms = useMemo(() => {
    return new TinaCMS({
      enabled: true,
      sidebar: true,
      apis: {
        
      },
    });
  }, []);

  return <TinaProvider cms={cms}>{children}</TinaProvider>;
}