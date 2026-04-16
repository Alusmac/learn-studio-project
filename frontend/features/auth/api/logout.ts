export const logout = async (): Promise<{ ok: true }> => {
  const response = await fetch("/api/auth/logout", {
    method: "POST",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.message ?? "Logout failed");
  }

  return data;
};
