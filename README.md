# quote-generator-api
Quote generator API built with nodejs and harperdb.

You can find the article for this API [here](https://viblog.hashnode.dev/build-a-quotes-generator-api-with-nodejsexpress-and-harperdb)

**Live version [Quote API](https://viblog-quote-api.herokuapp.com/quotes)**.
## How to use.
Clone the repo

```
git clone https://github.com/Lucky-victory/quote-generator-api
```
Move into the directory

```
cd quotes-generator-api
```

Copy the `.env.example` file to the `.env` file

```
cp .env.example .env
```
Fill out the following placeholders with correct details.
 - `DB_HOST`: your HarperDB instance URL, e.g https://xxxxxxxxx.harperdbcloud.com
 - `DB_USER`: your HarperDB instance username.
 - `DB_PASS`: your HarperDB instance password.

Now, Run the following command.
```
 npm install
 npm run db:init
 npm run start
```

The server would start at http://localhost:3300
## Routes
- `/quotes`: **method:GET**:get all quotes, you can also limit the number quotes to return by passing query param `limit`, e.g */quotes?limit=5* 
- `/quotes/random`: **method:GET**: get a random quote.
- `/quotes/create` **method:POST**: make a post request to this route to add a new quote.
- `/quotes/:quote_id` **method:PUT**: update a quote.
- `/quotes/:quote_id` **method:DELETE**: delete a quote.
- `/quotes/category/:category` **method:GET**: get quotes by category, e.g */quotes/category/motivational* ,  you can also limit the number quotes to return by passing query param `limit`, e.g */quotes/category/motivational?limit=5*.
- `/quotes/author/:author` **method:GET**: get quotes by author, e.g */quotes/author/steve jobs* , you can also limit the number quotes to return by passing query param `limit`, e.g */quotes/author/steve jobs?limit=5*
