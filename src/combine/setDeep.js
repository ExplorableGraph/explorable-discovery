// Apply all updates from the source to the target.
export default async function setDeep(target, source) {
  for (const key of await source.keys()) {
    const sourceValue = await source.get(key);
    const sourceExplorable =
      typeof sourceValue?.get === "function" &&
      typeof sourceValue?.keys === "function";

    if (sourceExplorable) {
      const targetValue = await target.get(key);
      const targetExplorable =
        typeof targetValue?.get === "function" &&
        typeof targetValue?.keys === "function";

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
