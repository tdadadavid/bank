import { IncomingHttpHeaders } from "http";
import "express";
import { Schema } from "joi";

export interface ControllerArgs {
  input?: any;
  params?: any;
  query?: any;
  files?: any | null | undefined; //TODO: come back to work on the types for this.
  user?: TokenUser | undefined | null;
  headers?: IncomingHttpHeaders;
}

export interface ValidationSchema {
  inputSchema?: Schema;
  paramsSchema?: Schema;
  querySchema?: Schema;
}

export interface TokenUser {
  id: string;
  role: string;
}

export interface NewProjectProposal {
  readonly email: string;
  readonly project: string;
  readonly estimatedCost: string;
  readonly artist: string;
  readonly date: string;
}

export interface AdminProjectDecisionOptions {
  name: string;
  email: string;
  status: "Approved" | "Rejected";
  project: string;
  accepted_at?: string;
  rejected_at?: string;
}

export interface NewContributionNotificationOptions {
  emails: string[];
  amount: number;
  when: string;
}

export interface IEMAIL {
  readonly fileName: string;
  readonly data: Record<any, unknown>;
  readonly email: string;
  readonly subject?: string;
  readonly attachments?: Array<string>;
}
