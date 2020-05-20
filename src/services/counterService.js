const BASE_URL = 'http://localhost:3001';

class counterService {
    async fetchAdd(value) {
        const response = await fetch(`${BASE_URL}/counters`);
    
        return {
          items: await response.json(),
        };
      };
      async fetchDeduct(value) {
        const response = await fetch(`${BASE_URL}/counters`);
    
        return {
          items: await response.json(),
        };
      }

    async getItems() {
      const response = await fetch(`${BASE_URL}/counters`);

      return {
        items: await response.json(),
    };
    }

    async save(id, value) {
      const response = await fetch(`${BASE_URL}/counters/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id, value}),
      });

      return {
        items: await response.json(),
    };
    }
}

export default new counterService();
