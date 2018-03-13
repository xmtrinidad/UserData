export class User {
  id: number;
  username: string;
  address: Address;
}

export class Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}
