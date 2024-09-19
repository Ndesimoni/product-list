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

export async function delateAllCustomersOrders() {
  const { error } = await supabase.from("Customers-Order").delete().match({});

  if (error) {
    console.log(error);

    throw new Error("orders could not be deleted");
  }
  return error;
}

export async function createCustomersOrder(dissert) {
  const orderedItem = { ...dissert, quantity: 1 };
  const { data, error } = await supabase
    .from("Customers-Order")
    .insert([orderedItem])
    .select();

  if (error) {
    console.log(error);

    throw new Error("orders could not be created");
  }
  return data;
}

export async function updateOrderQuantity(newQuantity) {
  if (newQuantity.quantity <= 0) return;
  const { data, error } = await supabase
    .from("Customers-Order")
    .update({ quantity: newQuantity.quantity, price: newQuantity.price })
    .eq("id", newQuantity.id);

  if (error) {
    console.log(error);

    throw new Error("quantity could not be created");
  }
  return data;
}
