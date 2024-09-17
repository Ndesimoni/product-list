import { supabase } from "./SupaBase";

export async function getAllItems() {
  let { data: items, error } = await supabase.from("Product-list").select("*");

  if (error) {
    console.log(error);

    throw new Error("cabins could not be loaded");
  }
  return items;
}

export async function getCustomersOrders() {
  let { data: CustomersOrders, error } = await supabase
    .from("Customers-Order")
    .select("*");

  if (error) {
    console.log(error);

    throw new Error("cabins could not be loaded");
  }
  return CustomersOrders;
}

export async function delateCustomersOrders(id) {
  const { error } = await supabase
    .from("Customers-Order")
    .delete()
    .eq("id", id);

  if (error) {
    console.log(error);

    throw new Error("orders could not be deleted");
  }
  return error;
}

export async function createCustomersOrder(dissert) {
  const { data, error } = await supabase
    .from("Customers-Order")
    .insert([dissert])
    .select();

  if (error) {
    console.log(error);

    throw new Error("orders could not be created");
  }
  return data;
}
