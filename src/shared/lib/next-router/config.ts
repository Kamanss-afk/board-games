export const paths = {
  home: {
    getHref: () => '/',
  },
  login: {
    getHref: () => '/login',
  },
  signup: {
    getHref: () => '/signup',
  },
  category: {
    getHref: ({ id, page }: { id: string, page?: number}) => `/category/${id}${page ? `/${page}` : ''}`,
  },
  lobby: {
    getHref: ({ id }: { id: string }) => `/lobby/${id}`,
  },
};