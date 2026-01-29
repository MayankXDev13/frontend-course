"use server";

export async function createUser(fromData: FormData) {
  const name = fromData.get("name");
  console.log("Creating user", name);
}
