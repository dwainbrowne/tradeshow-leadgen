// services/ApiService.ts

// Generic type for request options
type RequestOptions = {
  method: string;
  headers?: HeadersInit;
  body?: BodyInit | null;
};

// Generic ApiService class for handling API requests
export class APIService<T> {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl; // Base URL for the API endpoints
  }

  // Generic request method to handle API calls
  async request(endpoint: string, options: RequestOptions): Promise<T | string> {
    try {
      // Perform the fetch request using the endpoint and options provided
      const response = await fetch(`${this.baseUrl}/${endpoint}`, options);

      // Check if the response is not ok (status code outside 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Parse the JSON response and return it
      const data: T = await response.json();
      return data;
    } catch (error) {
      // Return error message in case of failure
      return `Error: ${error instanceof Error ? error.message : 'Unknown error'}`;
    }
  }

  // Method for creating a new entity
  create(data: T): Promise<T | string> {
    return this.request('create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  }

  // Method for listing all entities
  list(url): Promise<T | string> {
    return this.request(url, { method: 'GET' });
  }

  // Method for getting a single entity by ID
  get(id: string): Promise<T | string> {
    return this.request(`get/${id}`, { method: 'GET' });
  }

  // Method for updating an entity by ID
  update(id: string, data: T, url:string): Promise<T | string> {
    
    //Overideing the base URL with the URL passed in the method
    this.baseUrl = url;

    return this.request("", {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  }

  // Method for deleting an entity by ID
  delete(id: string): Promise<T | string> {
    return this.request(`delete/${id}`, { method: 'DELETE' });
  }
}
