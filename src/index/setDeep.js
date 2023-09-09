// Apply all updates from the source to the target.
export default async function setDeep(target, source) {
  for (const key of await source.keys()) {
    const sourceValue = await source.get(key);
    const sourceIsAsyncDictionary =
      typeof sourceValue?.[Symbol.asyncIterator] === "function" &&
      typeof sourceValue?.get === "function";

    if (sourceIsAsyncDictionary) {
      const targetValue = await target.get(key);
      const targetIsAsyncDictionary =
        typeof targetValue?.[Symbol.asyncIterator] === "function" &&
        typeof targetValue?.get === "function";

      if (targetIsAsyncDictionary) {
        // Both source and target are async dictionaries; recurse.
        await setDeep(targetValue, sourceValue);
        continue;
      }
    }

    // Copy the value from the source to the target.
    await target.set(key, sourceValue);
  }
}
