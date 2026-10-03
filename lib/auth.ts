export type SessionUser = {
  name: string;
  email: string;
  plan?: string;
};

export function getStoredUser(): SessionUser | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const raw = window.localStorage.getItem('evscore_user');

  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as SessionUser;
  } catch {
    return null;
  }
}

export function saveStoredUser(user: SessionUser) {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem('evscore_user', JSON.stringify({ ...user, plan: user.plan || 'Premium' }));
}

export function clearStoredUser() {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.removeItem('evscore_user');
}
