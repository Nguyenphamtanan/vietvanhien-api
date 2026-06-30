export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
export const ASSET_URL = API_URL.replace(/\/api\/?$/, '');

export function resolveAssetUrl(image?: string) {
  if (!image || image.startsWith('http')) return image || '';
  return image.startsWith('/uploads/') ? `${ASSET_URL}${image}` : image;
}

export function getImageUrl(image?: string) {
  return resolveAssetUrl(image) || '/images/hero-bg.jpg';
}

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const isFormData = typeof FormData !== 'undefined' && options.body instanceof FormData;
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
      ...(options.headers || {})
    },
    cache: 'no-store'
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: 'Request failed' }));
    throw new Error(error.message || 'Request failed');
  }

  return res.json();
}

export function getToken() {
  if (typeof window === 'undefined') return '';
  return localStorage.getItem('vvh_admin_token') || '';
}

export function adminRequest<T>(path: string, options: RequestInit = {}) {
  return request<T>(path, {
    ...options,
    headers: {
      Authorization: `Bearer ${getToken()}`,
      ...(options.headers || {})
    }
  });
}

export default request;
