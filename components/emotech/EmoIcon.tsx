import {
  Brain,
  ClipboardList,
  FileChartColumn,
  Gauge,
  HeartHandshake,
  Laptop,
  School,
  ScanFace,
  Smile,
  UserRound,
  Users,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Icons for the EmoTech sections (System Flow, Solution, Technology), from
 * the Lucide icon set so every glyph shares one grid, stroke and alignment.
 */
const ICONS: Record<string, LucideIcon> = {
  family: UsersRound, // schools & families sign up / parent + child review
  checklist: ClipboardList, // quick quiz
  gauge: Gauge, // one score / score the gap
  report: FileChartColumn, // reports for parents & schools
  handshake: HeartHandshake, // content, psychologist & coaching
  brain: Brain, // coach + positivity tracker
  group: Users, // mentoring in two formats
  principal: School, // principal reviews the class report
  student: UserRound, // student answers the questionnaire
  laptop: Laptop,
  camera: ScanFace, // facial analysis on camera
  smile: Smile, // positivity score
};

export default function EmoIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICONS[name];
  if (!Icon) return null;
  return <Icon aria-hidden strokeWidth={1.75} className={cn("h-8 w-8 shrink-0", className)} />;
}
