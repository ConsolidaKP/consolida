'use server'

import { cookies } from 'next/headers'
import { API_URL } from "@/config/api";

export async function loginAction(email: string, password: string) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, clave: password }),
  });

  if (res.ok) {
    const data = await res.json();
    cookies().set('accessToken', data.access_token, { 
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict'
    });
    return data;
  } else {
    throw new Error('Login failed');
  }
}

export async function logoutAction() {
  cookies().delete('accessToken');
}

export async function getProfileAction() {
  const token = cookies().get('accessToken')?.value;
  if (!token) throw new Error('No token found');

  const res = await fetch(`${API_URL}/auth/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (res.ok) {
    return res.json();
  } else {
    throw new Error('Failed to get profile');
  }
}