## Upvote

Upvote is a Reddit-esque web application that allows users to create posts, upvote and downvote posts, and comment on posts in a multi-threaded, nested list.

The project is built using Next.js with the /app router and [Tailwind CSS](https://tailwindcss.com/), and uses [Auth.js (formerly Next Auth)](https://authjs.dev/) for user authentication. The data is stored in a Postgres database, which is created and accessed with raw SQL queries using the `pg` package.

The project is a work in progress and is not yet complete.

## Features

- [x] View a list of posts
- [x] View a single post
- [x] Create a post
- [x] Upvote and downvote posts
- [x] Pagination of posts
- [x] Comment on posts
- [x] Nested comments (recursive lists)
- [x] User authentication

## Setup instructions

1. Fork the repository (check "copy the main branch only") and clone your fork to your local machine✔
2. Run `npm install`✔
3. Create a `.env.local` file in the root directory and add the following environment variables:
   - `DATABASE_URL` - the URL of your Postgres database (eg. the Supabase connection string) ✔
   - `AUTH_SECRET` - the Next Auth secret string (this can be anything at all like a password, but keep it secret!)✔
   - `AUTH_GITHUB_ID` - the GitHub OAuth client ID (create yours in [Github developer settings](https://github.com/settings/developers)✔
   - `AUTH_GITHUB_SECRET` - the GitHub OAuth client secret (create this in [Github developer settings](https://github.com/settings/developers))✔
4. Create the database schema by running the SQL commands in `schema.sql` in your database (eg. by running the commands in Supabase Query Editor)✔
5. Run `npm run dev` to start the development server ✔
6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the site ✔

## Potential future features

- [ ] User profiles
- [ ] Sorting posts by recent (date posted), top (most upvotes), and most controversial (most upvotes _and_ downvotes)
- [ ] User karma scores
- [ ] User badges / trophies (awards for achievements like number of posts, years on the site, etc.)
- [ ] User settings (eg. number of posts per page, theme, etc.)
- [ ] Moderation tools / reporting or flagging objectionable comments for removable by admins
- [ ] Searching posts (possibly using simple SQL LIKE '%some search%', or [Postgres text search](https://www.crunchydata.com/blog/postgres-full-text-search-a-search-engine-in-a-database))
- [ ] Subreddits (separate communities, that isn't just one big list of posts, that can be created by users)
- [ ] User notifications
- [ ] User private messaging
- [ ] User blocking
- [ ] User following
- [ ] User feed (posts from users you follow)
- [ ] User flair

# Reflection

## Requirements met

- Deploy to vercel and auth working
- Stretch: Fix page titles on post pages to match the post title
- Stretch: Handle the error when you click to vote while not logged in to show a nice error message

## Issues faced during assignment and reflections on completed requirements

- Initially, it was going well and I got the deployment to vercel working. It wasn't until I tried to log in that I faced issues. After looking at the logs in vercel it showed my error was with my renaming of the database tables. I decided to rename my tables due to tables with the same names used for other apps I have made. Despite me being thorough with renaming queries in app, this was not enough due to the pg adapter for auth requiring the original table names. There were two potential fixes, either go back to the original table names OR edit the Adapter file. I decided to create a new project on supabase and use the original table names as it felt the most time efficient way to fix this error. This fixed the error and meant I could continue with stretch goals.
- The first task I chose to tackle after deployment was the error page, this felt straight forward and was something I have done in previous assignments. The most time spent for this task was on styling. Overall, this went well as I didn't face any errors and I also tried to make sure the error page felt familiar by ensuring the styling was consistent with the rest of the app.
- The next task was to fix page titles, this was a metadata task. I went back and checked resources from Moodle, looked back on previous assignments and also checked the NextJS documentation on metadata. I had an error where the code looked right and the console logs were logging what I expected them to. After reading the documentation again, I realised I had called the function "MetaData" or something similar without realising that it has to be called generateMetadata(), after fixing this it worked and the title now shows as the post title.
