import * as JWT from "jwt-decode";
import axios from "axios";
import { api } from "../api";

export function getCookieValue(nome) {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [name, value] = cookie.split("=");
    if (name === nome) {
      return value;
    }
  }
  return null;
}

export const fetchUserData = async () => {
  try {
    const token = getCookieValue("BeholderToken");
    if (token) {
      const decodedToken = JWT.jwtDecode(token);
      const userId = decodedToken.userId;
      const response = await axios.get(
        `http://localhost:4200/api/usuario/${userId}`
      );

      return response.data[0];
    }
  } catch (error) {
    console.error("Erro ao obter os dados do usuário:", error);
  }
};

export const fetchOtherUsers = async (id) => {
  return await api.get(`/usuariomesa/${id}`);
};
