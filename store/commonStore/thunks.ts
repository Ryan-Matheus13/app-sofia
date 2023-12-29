import { createAsyncThunk } from "@reduxjs/toolkit";


export const getCampaigns = createAsyncThunk(
  "getCampaigns",
  async () => {
    try {
      const response = await api.core.get(
        ``
      );

      if (response) {
        if (response.status == 200) {
          return response.data;
        }
      }

      return response.data;
    } catch (error) {
      console.log("error: ", error);
    }
  }
);

export const getObjectives = createAsyncThunk(
  "getObjectives",
  async () => {
    try {
      const response = await api.core.get(
        ``
      );

      if (response) {
        if (response.status == 200) {
          return response.data;
        }
      }

      return response.data;
    } catch (error) {
      console.log("error: ", error);
    }
  }
);

export const getReport = createAsyncThunk(
  "getReport",
  async () => {
    try {
      const response = await api.core.get(
        ``
      );

      if (response) {
        if (response.status == 200) {
          return response.data;
        }
      }

      return response.data;
    } catch (error) {
      console.log("error: ", error);
    }
  }
);