export async function fetchAPI<T>(resource: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}${resource}`, options);
  return res.json();
}
