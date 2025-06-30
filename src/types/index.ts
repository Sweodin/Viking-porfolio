import type { Asset, Entry, EntrySkeletonType } from 'contentful';
import type { Document } from '@contentful/rich-text-types';

// For Contentful-based projects
export interface IProjectFields {
  title: string;
  description: Document;
  tags?: string[];
  image?: Asset<'WITHOUT_UNRESOLVABLE_LINKS'>;
  liveUrl?: string;
  sourceUrl?: string;
}

export type ProjectEntrySkeleton = EntrySkeletonType<IProjectFields, 'project'>;

export type ProjectEntry = Entry<ProjectEntrySkeleton, 'WITHOUT_UNRESOLVABLE_LINKS'>;

// A simplified, clean data structure for components to use.
// This decouples components from the complex Contentful SDK types.
export type Project = IProjectFields & { id: string };

// For skills section
export interface Skill {
  name: string;
  level: number; // Can be omitted if not used for styling
  icon?: string; // Optional: path to an icon or an SVG component
}
