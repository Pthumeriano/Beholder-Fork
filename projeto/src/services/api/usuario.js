import { api } from ".";

export const criarNovoUsuario = async (data) => {
  if (data.datanascimento) {
    return await api.post("/usuarios", data);
  }

  delete data.datanascimento;
  return await api.post("/usuarios", data);
};

export const autenticar = async (data) => {
  const response = await api.post(
    "usuarios/login",
    {
      email: data.email,
      senha: data.senha,
    },
    {
      withCredentials: true,
    }
  );

  console.log("Usuário autenticado com sucesso:", response.data);
};

export const listarTemasFavoritos = async (data) => {
  return await api.get("usuarios/temas/listar");
};
