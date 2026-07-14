import { BookOpen, Code2, Gem, Sparkles, Swords, Wrench } from "lucide-react";

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "etherealize", path: "/etherealize", icon: Sparkles, isContentType: true },
  { key: "zoro", path: "/zoro", icon: Swords, isContentType: true },
  { key: "optimizer", path: "/optimizer", icon: Wrench, isContentType: true },
  { key: "items", path: "/items", icon: Gem, isContentType: true },
  { key: "codes", path: "/codes", icon: Code2, isContentType: true },
] as const;

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
