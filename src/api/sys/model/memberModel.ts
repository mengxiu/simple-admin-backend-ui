import { BaseListResp } from '/@/api/model/baseModel';

/**
 *  @description: Member info response
 */
export interface MemberInfo {
  id: string;
  createdAt?: number;
  username: string;
  password: string;
  nickname: string;
  rankId: number;
  mobile: string;
  email: string;
  avatar: string;
}

/**
 *  @description: Member list response
 */

export type MemberListResp = BaseListResp<MemberInfo>;
