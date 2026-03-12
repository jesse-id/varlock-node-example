const vars = [
  "VARLOCK_EXAMPLE",
  "VARLOCK_EXAMPLE_NUMBER",
  "VARLOCK_EXAMPLE_BOOLEAN",
  "VARLOCK_EXAMPLE_URL",
  "VARLOCK_EXAMPLE_ENUM",
  "VARLOCK_EXAMPLE_EMAIL",
  "VARLOCK_EXAMPLE_PORT",
  "VARLOCK_EXAMPLE_IP",
  "VARLOCK_EXAMPLE_SEMVER",
  "VARLOCK_EXAMPLE_ISO_DATE",
  "VARLOCK_EXAMPLE_UUID",
  "VARLOCK_EXAMPLE_MD5",
  "VARLOCK_EXAMPLE_SIMPLE_OBJECT",
]

console.log("\n--- varlock resolved env vars ---\n")
for (const name of vars) {
  const val = process.env[name]
  console.log(`${name}:`, val)
}

const secret = process.env.VARLOCK_EXAMPLE_SECRET
console.log("\n--- @sensitive secret details ---\n")
console.log("VARLOCK_EXAMPLE_SECRET with @sensitive:", process.env.VARLOCK_EXAMPLE_SECRET)
console.log("VARLOCK_EXAMPLE_SECRET loaded:", !!secret)
console.log("VARLOCK_EXAMPLE_SECRET length:", secret?.length)
console.log("VARLOCK_EXAMPLE_SECRET (first 4 chars):", secret?.slice(0, 4) + "…")
console.log()
