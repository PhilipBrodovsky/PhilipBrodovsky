export const Api = {
   baseApi: 'http://localhost:5000',
   headers: {
      'Content-Type': 'application/json'
   },

   async login(body) {
      try {
         const res = await fetch(`${this.baseApi}/login`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { ...this.headers }
         });
         const response = await res.json();
         return response;
      } catch (err) {
         console.log('api/login err', err.message);
         return { err: 'server error' };
      }
   }
};
