const fetchApi = <T>(data: T) => {
  return new Promise<T>((resolve) => {
    setTimeout(() => resolve(data), 350);
  });
};

export const fakeFetch = {
  get<T>(url: string, { data }: { data: T }): Promise<T> {
    return fetchApi(data);
  }
};