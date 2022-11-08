import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "zn1p6b8j",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: "skuhWTUOjiZLXssfXptU4JZewc8EpZ706FN6sg2dlWgMO8kdV7x7vdqp7qvsMurp2u5b7dHJ9kQsqUdpaIe2Lf1P6EhWsZDZpR7Spa6uSqloYP36GzwaekXRMmIb52fBoAUhXIMnsdndXxUAZsen1Y3jnPupu8yh64l4KDgeGcvAQc36iS3w",
});
