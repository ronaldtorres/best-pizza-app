import api from "@/utils/apiInstace";

const SESSION_NAME = "user";

export default {
  async login(email, password) {
    try {
      let res = await api.get("RH.json");
      const users = res.data.response?.users;

      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (!user) return;

      return {
        name: user.name,
        email,
      };
    } catch (error) {
      console.error(error);
    }
  },

  logout() {
    // Logout through api when needed...
    this.removeSessionForUser();
  },

  getCurrentSession() {
    return JSON.parse(localStorage.getItem(SESSION_NAME)) ?? undefined;
  },

  setSessionForUser(user) {
    localStorage.setItem(SESSION_NAME, JSON.stringify(user));
  },

  removeSessionForUser() {
    localStorage.removeItem(SESSION_NAME);
  },
};
