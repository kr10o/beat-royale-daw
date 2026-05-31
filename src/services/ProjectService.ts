/**
 * Service for handling project persistence using Cloudflare D1/KV via API.
 */
export class ProjectService {
  private static apiBase = '/api/projects';

  static async listProjects() {
    // In a real app: return fetch(this.apiBase).then(res => res.json());
    return [];
  }

  static async saveProject(project: any) {
    // In a real app: return fetch(this.apiBase, { method: 'POST', body: JSON.stringify(project) });
    console.log('Saving project:', project.name);
  }

  static async deleteProject(id: string) {
    console.log('Deleting project:', id);
  }
}
