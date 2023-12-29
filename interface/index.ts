type IAuthRequest = {
  username: string;
  password: string;
};

type IAuthResponse = {
  refresh: string;
  access: string;
};

type IResponseRefreshToken = {
  access: string;
};

type IUserTokenAuth = {
  user: {
    refresh: string;
    access: string;
  };
};

type IResponseLogin = {
  access: string;
  refresh: string;
  first_name: string;
  last_name: string;
  tempo_vida: number;
  groups: Array<IGroup>;
};

type IGroup = {
  name: string;
}

type IHeaderConfig = {
  Authorization: string;
  Accept: string;
  AccessControlAllowOrigin: string;
  AccessControlAllowMethods: string;
  AccessControlAllowHeaders: string;
};

export type {
  IAuthRequest,
  IAuthResponse,
  IUserTokenAuth,
  IResponseRefreshToken,
  IHeaderConfig,
  IResponseLogin
};
