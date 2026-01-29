import { createUser } from "@/actions";
import React from "react";

function UserForm() {

    /*

    // Inline Server action
    async function createUser(fromData: FormData) {
        "use server" // This is a server action
        const name  = fromData.get("name")
        console.log("Creating user", name);
        
    } 
        */

  return (
    <form action={createUser}>
      <input type="text" name="name" placeholder="John Doe" />
      <button type="submit" className="bg-blue-500">Create User</button>
    </form>
  );
}

export default UserForm;
