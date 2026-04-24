// Auto-generated content manifest for PCAT
// Question targets are 2-3x competition floor

export type ActivityType =
  | "multiple_choice" | "essay" | "cloze_deletion" | "numeric_input"
  | "whiteboard" | "reading_passage" | "audio_mcq" | "voice_explanation"
  | "flashcard_deck" | "fill_in_blank" | "data_interpretation" | "diagram_label"
  | "scenario_based" | "coding_challenge" | "case_study" | "calculation"
  | "simulation" | "gamified_quiz" | "portfolio_review" | "visual_mcq"
  | "branching_scenario" | "heading_matching" | "project_based" | "story_based"
  | "sql_challenge" | "rubric_assessment" | "peer_review" | "timeline_ordering";

export type ExamCategory =
  | "admissions" | "language_cert" | "professional" | "k12_national"
  | "trade" | "creative" | "productivity" | "language_skills" | "kids";

export interface TopicManifest {
  id: string;
  domain: string;
  title: string;
  icon: string;
  color: string;
  minQuestionCount: number;
  requiredActivityTypes: ActivityType[];
}

export interface ContentManifest {
  examId: string;
  examName: string;
  totalQuestions: number;
  category: ExamCategory;
  topics: TopicManifest[];
}

export const CONTENT_MANIFEST: ContentManifest = {
  examId: "pcat",
  examName: "PCAT",
  totalQuestions: 2700,
  category: "admissions",
  topics: [
    {
  id: "biological-processes",
  domain: "biological-processes",
  title: "Biological Processes",
  icon: "🧬",
  color: "#059669",
  minQuestionCount: 700,
  requiredActivityTypes: ["multiple_choice", "reading_passage"],
},
{
  id: "chemical-processes",
  domain: "chemical-processes",
  title: "Chemical Processes",
  icon: "⚗️",
  color: "#DC2626",
  minQuestionCount: 700,
  requiredActivityTypes: ["multiple_choice", "numeric_input"],
},
{
  id: "critical-reading",
  domain: "critical-reading",
  title: "Critical Reading",
  icon: "📖",
  color: "#1E40AF",
  minQuestionCount: 450,
  requiredActivityTypes: ["multiple_choice", "reading_passage"],
},
{
  id: "quantitative-reasoning",
  domain: "quantitative-reasoning",
  title: "Quantitative Reasoning",
  icon: "🔢",
  color: "#D97706",
  minQuestionCount: 500,
  requiredActivityTypes: ["multiple_choice", "numeric_input", "whiteboard"],
},
{
  id: "verbal-ability",
  domain: "verbal-ability",
  title: "Verbal Ability",
  icon: "🗣️",
  color: "#7C3AED",
  minQuestionCount: 350,
  requiredActivityTypes: ["multiple_choice", "fill_in_blank"],
}
  ],
};
