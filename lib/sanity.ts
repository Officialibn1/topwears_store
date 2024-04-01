import imageUrlBuilder from "@sanity/image-url/lib/types/builder";
import { createClient } from "next-sanity";

export const client = createClient({
	projectId: "ql3jlmao",
	dataset: "production",
	apiVersion: "2024-04-01",
	useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
	return builder.image(source);
}
