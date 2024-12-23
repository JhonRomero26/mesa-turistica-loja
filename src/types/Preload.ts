export interface Preload {
  as: string;
  href: string;
  type: string;
  integrity?: string;
  rel?: "stylesheet" | "preload" | "prefetch";
  crossorigin?: "anonymous" | "use-credentials";
}
