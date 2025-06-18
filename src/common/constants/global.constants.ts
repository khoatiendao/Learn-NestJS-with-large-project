import { FileType, SupportFileType } from "../enums/file.enums";

export enum PrefixType {
  ADMIN = 'admin',
  MERCHANT = 'merchant',
  CUSTOMER = 'customer',
  HEAD = 'head',
  TEST = 'test',
  EXTERNAL = 'external',
}

export const HASH_ROUND = 12;

export const MapFilePathSupport = [
  {
    key: FileType.IMAGE,
    types: ['png', 'jpg', 'jpeg'],
  },
  {
    key: FileType.PDF,
    types: ['pdf'],
  },
  {
    key: FileType.AUDIO,
    types: ['mp3', 'mp4', 'wav'],
  },
  {
    key: FileType.EXCEL,
    types: [SupportFileType.xlsx, SupportFileType.xls],
  },
  {
    key: FileType.CSV,
    types: [SupportFileType.csv, SupportFileType.csv],
  },
];