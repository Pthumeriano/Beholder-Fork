import { api } from ".";

export const listarTemas = async () => {
  return await api.get("/temas");
};
