import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ url }) => {
  const redirectUri = url.searchParams.get('redirect_uri') || '/';
  const clientId = process.env.TINA_CLIENT_ID || 'bdb3d7a0-e9d1-4547-b22a-ec811ee4ada8';
  
  // Redireciona para o Tina Cloud para autenticação
  const tinaAuthUrl = `https://auth.tina.io/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=openid profile email`;
  
  return new Response(null, {
    status: 302,
    headers: {
      'Location': tinaAuthUrl,
    },
  });
};
