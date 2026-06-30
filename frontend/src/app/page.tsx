import PublicLanding from '@/components/public/PublicLanding';
import request from '@/lib/api';
import type { NewsEvent, Partner, Project, SiteSetting } from '@/types';

async function safeFetch<T>(path: string, fallback: T): Promise<T> {
  try {
    return await request<T>(path);
  } catch {
    return fallback;
  }
}

export default async function Home() {
  const [site, projects, newsEvents, partners] = await Promise.all([
    safeFetch<SiteSetting | null>('/site', null),
    safeFetch<Project[]>('/projects', []),
    safeFetch<NewsEvent[]>('/news-events', []),
    safeFetch<Partner[]>('/partners', [])
  ]);

  return <PublicLanding site={site} projects={projects} newsEvents={newsEvents} partners={partners} />;
}
