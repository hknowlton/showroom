export type ServerError = {
    Error: string;
    Message: string;
    Violations?: [{ Key: string; Message: string }];
  };