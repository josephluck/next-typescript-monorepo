import * as express from "express";
import * as faker from "faker";

export namespace Models {
  export interface Post {
    id: string;
    title: string;
    content: string;
  }
}

function randomPost(): Models.Post {
  return {
    id: faker.random.uuid(),
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs()
  };
}

const app = express();

app.get("/posts", (_req, res) => {
  const posts: Models.Post[] = Array.from({ length: 10 }).map(randomPost);
  res.json(posts);
});

app.listen(5000);

console.log("API started on port 5000");
