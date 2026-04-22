import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  apiVersion: "2026-04-22",
  useCdn: true, // 'true' velocizza le risposte usando la cache di Sanity (ottimo per le foto)
});