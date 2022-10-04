// Apply all updates from the source to the target.
export default async function setDeep(target, source) {
  for await (const key of source) {
    const sourceValue = await source.get(key);
    const sourceExplorable =
      typeof sourceValue?.[Symbol.asyncIterator] === "function" &&
      typeof sourceValue?.get === "function";

    if (sourceExplorable) {
      const targetValue = await target.get(key);
      const targetExplorable =
        typeof targetValue?.[Symbol.asyncIterator] === "function" &&
        typeof targetValue?.get === "function";

      if (targetExplorable) {
        // Both source and target are explorable; recurse.
        await setDeep(targetValue, sourceValue);
        continue;
      }
    }

    // Copy the value from the source to the target.
    await target.set(key, sourceValue);
  }
}
