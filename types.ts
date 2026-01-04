// FIX: Import `ComponentType` from 'react' to resolve the "Cannot find namespace 'React'" error.
import type { ComponentType } from 'react';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

export interface Skill {
  name: string;
  icon: ComponentType<{ className?: string }>;
}
