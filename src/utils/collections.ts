import {
  type CollectionEntry,
  getCollection,
  type DataEntryMap,
} from "astro:content";

/*
 * Returns a collection without drafts in prod. For dev, returns all.
 */
export const getCollectionWithoutDrafts = async <T extends keyof DataEntryMap>(
  collection: T,
): Promise<CollectionEntry<T>[]> => {
  const isProd = import.meta.env.PROD;

  if (isProd) {
    return getCollection(collection, ({ data }) => {
      // Check if the data has a draft property and if it's true
      if ("draft" in data && data.draft === true) {
        return false;
      }

      return true;
    });
  }

  return getCollection(collection);
};
