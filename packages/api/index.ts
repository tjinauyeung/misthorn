import express, { Request, Response, NextFunction } from "express";
import fetch from "node-fetch";
import { head } from "lodash";
import cors from "cors";

global.fetch = fetch;

import Unsplash, { toJson, UnsplashApi } from "unsplash-js";

const unsplash = new Unsplash({
  accessKey: "1f49c40254dbbac0834a6cd307392e2f3b626445c846db43e89513f3af7924dd"
});

const app = express();

app.use(cors());

const PORT = 8000;

interface Photo {
  width: number;
  height: number;
  urls: {
    thumb: string;
  };
}

app.get("/random/thumbnail", (req, res, next) => {
  unsplash.photos
    .getRandomPhoto({ count: 1 })
    .then(toJson)
    .then(json => head(json) as Photo)
    .then(photo => {
      if (photo) {
        res.json({
          width: photo!.width,
          height: photo!.height,
          url: photo!.urls.thumb
        });
      } else {
        next(new Error("not found"));
      }
    })
    .catch(next);
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
