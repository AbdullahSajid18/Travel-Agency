import { redirect } from "react-router";

export const loader = () => {
    throw redirect("/dashboard");
}

export  const  Redirect = () => {
    return null;
}