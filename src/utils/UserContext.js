import { use } from "react";
import { createContext } from "react";


const UserContext = createContext({
  userLoggedIn: "Default user",

});

export default UserContext;