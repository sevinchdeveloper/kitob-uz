export type AuthLoginData = {
  phone: string;
  password: string;
};

export type UnauthorizedResponse = {
  message: string;
};

export type ValidationErrorResponse = {
  message: string;
  errors: Record<string, string[]>;
};


export interface AuthLoginResponse {
  token: string;
  user: {
    id: number;
    name: string;
    phone: string;
    ext_number: string | null;
  };
}


