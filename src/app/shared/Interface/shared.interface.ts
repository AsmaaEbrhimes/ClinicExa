export interface Igender {
  id: number;
  name: string;
}

export interface IresponseToken {
  nameid: string;
  unique_name: string;
  role: string;
  EmailActivated: string;
  nbf: number;
  exp: number;
  iat: number;
  iss: string;
  aud: string;
}


export interface Icountry{ name: string, code: string, length: number }
