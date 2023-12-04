import { api } from ".";

export const getUsuarioMesa = async (id) => {
  return await api.get(`/usuariomesa/${id}`);
};
