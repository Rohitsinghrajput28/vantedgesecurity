// API URL - configure via .env.local with VITE_API_URL
const API_BASE_URL = 'http://localhost:5000/api';

export const apiClient = {
  // Newsletter endpoints
  newsletter: {
    subscribe: async (email: string) => {
      const response = await fetch(`${API_BASE_URL}/newsletter/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      return response.json();
    },
    getAll: async () => {
      const response = await fetch(`${API_BASE_URL}/newsletter`);
      return response.json();
    },
    unsubscribe: async (email: string) => {
      const response = await fetch(`${API_BASE_URL}/newsletter/unsubscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      return response.json();
    },
  },

  // Contact endpoints
  contact: {
    create: async (data: {
      name: string;
      email: string;
      company?: string;
      message: string;
    }) => {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return response.json();
    },
    getAll: async () => {
      const response = await fetch(`${API_BASE_URL}/contact`);
      return response.json();
    },
    getOne: async (id: string) => {
      const response = await fetch(`${API_BASE_URL}/contact/${id}`);
      return response.json();
    },
    updateStatus: async (id: string, status: string) => {
      const response = await fetch(`${API_BASE_URL}/contact/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      return response.json();
    },
    delete: async (id: string) => {
      const response = await fetch(`${API_BASE_URL}/contact/${id}`, {
        method: 'DELETE',
      });
      return response.json();
    },
  },

  // Health check
  health: async () => {
    const response = await fetch(`${API_BASE_URL}/health`);
    return response.json();
  },
};
