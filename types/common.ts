export type quickActionDataType = {
  label: string;
  link: string;
  icon: any;
};

export type quickActionItemType = {
  item: quickActionDataType;
  index: number;
};
export type recentActivityDataType = {
  id: string;
  activity: string;
  date: string;
};
export type recentActivityItemType = {
  item: recentActivityDataType;
  index: number;
};

export type matchesDataType = {
  name: string;
  status: string;
  time: string;
  message: string;
  interests: Array<string>;
  avatar: string;
};
export type matchesItemType = {
  item: matchesDataType;
  index: number;
};

export type conversationDataType = {
  avatar: string;
  isMine: boolean;
  message: string;
  timestamp: string;
};
export type conversationItemType = {
  item: conversationDataType;
  index: number;
};
