import { createAsyncThunk } from "@reduxjs/toolkit";
import auth from "../../api/auth/api";
import StorageUtils from "../../utils/Storage";
import { IResponseLogin } from "../../interface";

type IRequestLogin = {
  username: string;
  password: string;
};

export const handleLoginAsync = createAsyncThunk(
  "login",
  async (userData: IRequestLogin) => {
    try {
      const response = await auth.post("/token/", userData);

      if (response) {
        if (response.status == 200) {
          if (response.data.access) {
            StorageUtils.setDataJwtToken(await response.data);
          }

          return response.data;
        }
      }

      return response;
    } catch (error) {
      console.log("error: ", error);
    }
  }
);

export const handleLogoutAsync = createAsyncThunk(
  "logout",
  async (user: IResponseLogin) => {
    try {
      const response = await auth.post<Promise<IResponseLogin>>(
        "/token/blacklist/",
        {
          refresh: user.refresh,
        }
      );

      if (response.status == 200) {
        StorageUtils.deleteDataJwtToken();
      }

      return response.data;
    } catch (error) {
      console.log("error: ", error);
    }
  }
);