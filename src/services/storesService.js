import api from "@/utils/apiInstace";

export default {
  async all() {
    try {
      let res = await api.get("RH.json");
      let stores = res.data?.response?.stores || [];

      return stores;
    } catch (error) {
      console.error("Error");
    }
  },
  getById() {},
};
