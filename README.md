# varlock-node-example

A minimal example showing how [varlock](https://varlock.dev/) pulls secrets from [1Password](https://1password.com/) at runtime using the `@varlock/1password-plugin`.

## How it works

Instead of a `.env` file with hardcoded secrets, this project uses a `.env.schema` file that declares:

- **`VARLOCK_EXAMPLE`** — a plain string value, defined inline
- **`VARLOCK_EXAMPLE_SECRET`** — a sensitive value fetched from 1Password at runtime via `op("op://...")`

When you run `npm run example`, varlock resolves the schema, fetches any secrets from 1Password, and injects them as environment variables into the Node.js process.

## Prerequisites

1. **Node.js** (v18+)
2. **1Password desktop app** with CLI integration enabled:
   - Open 1Password > Settings > Developer
   - Enable "Integrate with 1Password CLI"
3. **1Password CLI** (`op`) installed — see [1Password CLI docs](https://developer.1password.com/docs/cli/get-started/)
   - Verify with: `op account list`

## Setup

1. Clone this repo and install dependencies:

   ```sh
   git clone <repo-url>
   cd varlock-node-example
   npm install
   ```

2. Create a secret in your 1Password vault for the example to read. The default `.env.schema` expects an item at:

   ```
   op://Demos/varlock_example_secret/password
   ```

   To use a different item, edit `.env.schema` and replace the `op("op://...")` reference with your own. You can find the secret reference for any field in 1Password by clicking the field's dropdown and selecting **Copy Secret Reference**. It will look something like this:
   `"op://Demos/varlock_example_secret/password"`

3. Run the example:

   ```sh
   npm run example
   ```

   1Password will prompt you to authorize access (via biometrics or password), then the script prints the resolved secret.

## Using a service account instead

For CI/CD or deployed environments where the desktop app isn't available, set an `OP_TOKEN` environment variable with a [1Password service account token](https://developer.1password.com/docs/service-accounts/get-started/) and update the plugin config in `.env.schema`:

```
# @plugin(@varlock/1password-plugin, token=$OP_TOKEN)
```

## Learn more

- [varlock documentation](https://varlock.dev/)
- [env-spec format](https://varlock.dev/env-spec)
- [1Password plugin docs](https://varlock.dev/plugins/1password/)
