export type quickActionType = {
  label: string;
  link: string;
  icon: any;
};
export type recentActivityType = {
  id: string;
  activity: string;
  date: string;
};

export type chatDataType = {
  name: string;
  status: string;
  time: string;
  message: string;
  interests: Array<string>;
  avatar: string;
};
export type chatItemsType = {
  item: chatDataType;
  index: number;
};

export type recentActivityItemType = {
  item: recentActivityType;
  index: number;
};
export type quickActionItemType = {
  item: quickActionType;
  index: number;
};
