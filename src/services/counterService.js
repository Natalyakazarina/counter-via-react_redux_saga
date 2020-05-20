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
    }

export default new counterService();