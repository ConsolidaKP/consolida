"use server";

import { API_URL } from "@/config/api";
import { cookies } from "next/headers";

const AUTH_URL = `${API_URL}/auth/login`;

interface Credentials {
  email: string;
  password: string;
}

export const logIn = async (credentials: Credentials) => {
  const { email, password } = credentials;

  try {
    const res = await fetch(AUTH_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, clave: password }),
    });

    if (res.status === 401) {
      cookies().delete("accessToken");
      return { error: "Credenciales inválidas." };
    }

    const data = await res.json();
    cookies().set("accessToken", data.access_token);

    return data;
  } catch (error) {
    console.error(error);
    cookies().delete("accessToken");
    return { error: "Error de servidor." };
  }
};

export const whoAmI = async (token: string | null) => {
  cookies().delete("accessToken");
  try {
    const res = await fetch(`${API_URL}/auth/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status === 401) {
      cookies().delete("accessToken");
      return { error: "Credenciales inválidas." };
    }
    const data = await res.json();
    token && cookies().set("accessToken", token);

    return await data;
  } catch (error) {
    console.log(error);
  }
};

export const logOut = async () => {
  cookies().delete("accessToken");
};
