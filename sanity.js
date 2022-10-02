import sanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';


const client = sanityClient({
    projectId: "wkw0dboa",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-10-02"
})


const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;