type IAuthProps = {
  username: string;
  password: string;
  loading: boolean;
  error: string;
  user: {
    first_name: string;
    last_name: string;
  };
};

export type { IAuthProps };
