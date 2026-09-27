import { FeatureItem } from '@/types';

export const FEATURE_ITEMS: FeatureItem[] = [
  {
    id: 'pm',
    title: 'Project Management',
    description: 'Create projects and maintain essential project information, metadata, team rosters, and foundational parameters.',
    icon: 'folder_managed',
    colorClass: 'text-secondary',
  },
  {
    id: 'tm',
    title: 'Task Management',
    description: 'Track task progress, individual assignments, blockers, priority weights, and completion timelines accurately.',
    icon: 'task_alt',
    colorClass: 'text-primary',
  },
  {
    id: 'mt',
    title: 'Milestone Tracking',
    description: 'Monitor major project deliverables, critical path items, sprint cadences, and upcoming target deadlines.',
    icon: 'flag_circle',
    colorClass: 'text-tertiary',
  },
  {
    id: 'rr',
    title: 'Risk Register',
    description: 'Document, categorize, assess, assign ownership, and systematically monitor software project risks over time.',
    icon: 'assignment_late',
    colorClass: 'text-error',
  },
  {
    id: 'ra',
    title: 'AI Risk Analysis',
    description: 'Use AI-assisted analysis to identify potential project risks and bottlenecks from available project information.',
    icon: 'psychology',
    colorClass: 'text-secondary',
  },
  {
    id: 'mg',
    title: 'Mitigation Guidance',
    description: 'Receive suggested actions and remediation options that help project managers respond decisively to risks.',
    icon: 'healing',
    colorClass: 'text-amber-400',
  },
  {
    id: 'pd',
    title: 'Project Dashboard',
    description: 'View real-time project progress, critical risks, delayed tasks, and upcoming milestone dates in a unified view.',
    icon: 'dashboard',
    colorClass: 'text-secondary',
  },
  {
    id: 'pr',
    title: 'Project Reporting',
    description: 'Generate concise project and risk summaries formatted for project stakeholder reviews and executive briefings.',
    icon: 'summarize',
    colorClass: 'text-tertiary',
  },
];
