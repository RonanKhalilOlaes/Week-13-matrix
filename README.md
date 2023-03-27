# Envronmental Variable

1. create a file at the root of the project
``` 
.env
```

2. inside the .env file add the text:
- you must use `NEXT_PUBLIC` or else this will not work
``` 
NEXT_PUBLI_TITLE = "Digital Design and Development"
```
3. On the page, in between the export and return, write the variavle:
```
var title = process.env.NEXT_PUBLIC_TITLE;
```

4. Then in between the main write: 
```
{title}
```

5. make sure the `.gitignore` files has the `.env` inside 
- you want to prevent this secrete titel to be showm

## BCIT data from Digital Design and Development
[Digital design and Development Diploma Course] (https://www.bcit.ca/programs/digital-design-and-development-diploma-full-time-6515dipma/)