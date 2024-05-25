export interface Repositorios {
  id: number;
  name: string;
  full_name: string;
  description: string;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}
