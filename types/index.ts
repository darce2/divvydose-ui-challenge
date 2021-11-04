interface Label {
  id: number;
  url: string;
  color: string;
  description: string;
  name: string;
}

interface PullRequest {
  html_url: string;
  id: number;
  title: string;
  updated_at: string;
  labels: Label[];
}

export type { Label, PullRequest };
