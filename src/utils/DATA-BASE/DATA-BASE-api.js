import { supabase } from "./SupaBase";

export async function getAllItems() {
  let { data: items, error } = await supabase.from("Product-list").select("*");

  if (error) {
    console.log(error);

    throw new Error("cabins could not be loaded");
  }
  return items;
}
