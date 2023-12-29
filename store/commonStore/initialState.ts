import { ICommonProps } from "./interfaces";

export const commonInitialState: ICommonProps = {
  loading: true,
  activeMenu: 1,
  campaigns: [],
  objectives: [],
  userCampaign: 0,
  userObjective: 0,
  campaignPeriodStart: '',
  campaignPeriodEnd: '',
};
