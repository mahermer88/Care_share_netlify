import { fetchFromAPI } from "../../handlers/handle-backend/handle-checkout";

const handleCheckout = async (e, stripe, cart, customer_email) => {
  e.preventDefault();
  const line_items = cart.map((product) => {
    return {
      quantity: product.amount,
      price_data: {
        currency: "usd",
        unit_amount: product.price,
        product_data: {
          name: product.name,
          description: product.description,
          images: [product.img_full],
        },
      },
    };
  });

  const response = await fetchFromAPI({
    body: { line_items, customer_email },
  });
  const { sessionId } = response;
  const { error } = await stripe.redirectToCheckout({
    sessionId,
  });
  if (error) {
    console.log(error);
  }
};

export default handleCheckout;
