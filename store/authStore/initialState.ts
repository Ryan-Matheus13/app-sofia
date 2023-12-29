import { IAuthProps } from "./interfaces";

export const authInitialState: IAuthProps = {
  username: "",
  password: "",
  user: {
    first_name: "",
    last_name: "",
  },
  error: "",
  loading: false,
};
