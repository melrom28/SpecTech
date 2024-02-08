import React from "react";
import CardJson from "./CardJson";

interface UserProps {
  user: {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
    };
  };
}

const User: React.FC<UserProps> = ({ user }) => {
  const { id, name, username, email, address } = user;

  return (
      <CardJson
        key={id}
        name={name}
        userName={`Username: ${username}`}
        email={`Email: ${email}`}
        street={`Street: ${address.street}`}
        suite={`Suite: ${address.suite}`}
        city={`City: ${address.city}`}
        zipCode={`Zipcode: ${address.zipcode}`}
      />
  );
};

export default User;