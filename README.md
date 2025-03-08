<h1 align="center">Next.js + Notion — Wailtist Template</h1>

## Features

- **Next.js 14**: The most popular React framework.
- **Notion as a CMS**: Use Notion to manage your waitlist users.
- **Upstash Redis**: Use Upstash Redis to rate limit the number of signups in a given time period.
- **Resend**: Use Resend to send emails to users who sign up.
- **Vercel**: Deploy the app to Vercel with a single click.
- **shadcn/ui**: Use shadcn/ui for building the UI components.


## How to get started?

There are a few things you need to do before you can use this template:

### Notion

Assuming that you have a Notion account and a workspace, you can create a new database in your workspace and add the following columns:

- **Name**: Title
- **Email**: Email

Now you need to get the `SECRET` key for your workspace. You can get it from the [Notion Integrations page](https://www.notion.so/my-integrations). You will need this key to fetch data from your workspace.

Now you need to get the ID of the database you created. You can get it from the URL of the database. It will look something like this:

`https://www.notion.so/{USERNAME}/{DATABASE_ID}?v={NUMBERS}&pvs={NUMBERS}`

You need to copy the `DATABASE_ID` from the URL.


### Manual setup

 Fork this repository and clone it to your local machine.

Install the dependencies, this project uses `bun` as a package manager:

```bash
curl -fsSL https://bun.sh/install | bash
```

```bash
bun install
```

Create a `.env.local` file in the root of the project and add the environment variables mentioned above. You can also have a look at the `.env.example` file for reference.

```bash
cp .env.example .env.local
```

```bash
NOTION_SECRET=your_notion_integration_secret
NOTION_DB=your_notion_database_id
RESEND_API_KEY=your_resend_api_key
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
```

### Upstash Redis

It's fairly simple to get started with Upstash Redis. You can sign up for a free account and create a new Redis database. You will get a `REST URL` and a `TOKEN` that you can use to interact with the Redis database.

### Resend

You need to sign up for a Resend account if not already. Then you need to add your domain and verify the DNS records. Once you have done that, you can generate an API key from the Resend dashboard which you will need to send emails.

Run the development server:

```bash
bun dev
```

To run the email server:

```bash
bun email
```

### Deploy on Vercel

To deploy on Vercel, make your own copy repo (fork), and go on link:

```bash
https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F{YOUR_GITHUB_USERNAME}%2F{YOUR_REPO_NAME}&env=NOTION_SECRET,NOTION_DB,RESEND_API_KEY,UPSTASH_REDIS_REST_URL,UPSTASH_REDIS_REST_TOKEN
```
and add:

```bash
NOTION_SECRET=your_notion_integration_secret
NOTION_DB=your_notion_database_id
RESEND_API_KEY=your_resend_api_key
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
```


Enjoy!