"use client";

import { definePreview } from "next-sanity/preview";
import { projectId, dataset } from "./sanity.client";

function onPublicAccessOnly() {
  throw new Error(`You must be logged in to access this page`);
}

if (!projectId || !dataset) {
  throw new Error(
    `You must provide a projectId and dataset to use the preview`
  );
}

export const usePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly,
});
