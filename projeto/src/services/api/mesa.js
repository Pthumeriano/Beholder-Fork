import { api } from ".";

export const criarMesa = async (data) => {
  return await api.post("/mesas", data, { withCredentials: true });
};
