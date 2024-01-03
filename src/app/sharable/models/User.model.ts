

export interface User {
  id? :string,
  username :string,
  email :string,
  role? :string,
  phoneNumber :string,
  picture? :string,
  password? :string,
  confirmPassword? :string
}

export interface Principal{
  jwt :string;
  email :string;
  role :string;
}
