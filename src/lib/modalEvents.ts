import type { ProjectDetail } from "../types/project";

export function openProjectDetailsModal(project: ProjectDetail) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("open-project-details-modal", { detail: project })
    );
  }
}
