import React from "react";
import CommingSoonComponent from "./CommingSoonComponent";
import GalleryComponent_construction from "./GalleryComponent_construction";
import GalleryComponent_work from "./GalleryComponent_work";

export default function GalleryComponent() {
  return (
    <div>
      <GalleryComponent_construction />
      <GalleryComponent_work />
      <CommingSoonComponent />
    </div>
  );
}
