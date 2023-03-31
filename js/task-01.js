const subscription = "pro";

const canAccessContent = subscription === "pro" || subscription === "vip";

console.log("Є доступ к контенту?", canAccessContent);
