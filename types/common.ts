import { ExternalPathString, RelativePathString } from "expo-router";
import { ReactNode } from "react";

export type QuickActionDataType = {
  label: string;
  link: RelativePathString | ExternalPathString;
  icon: ReactNode;
};

export type QuickActionItemType = {
  item: QuickActionDataType;
  onPress: () => void;
  index: number;
};
export type RecentActivityDataType = {
  id: string;
  activity: string;
  date: string;
};
export type RecentActivityItemType = {
  item: RecentActivityDataType;
  index: number;
};

export type MatchesDataType = {
  name: string;
  status: string;
  time: string;
  message: string;
  interests: Array<string>;
  avatar: string;
};
export type MatchesItemType = {
  item: MatchesDataType;
  index: number;
};

export type ConversationDataType = {
  avatar: string;
  isMine: boolean;
  message: string;
  timestamp: string;
};
export type ConversationItemType = {
  item: ConversationDataType;
  index: number;
};
