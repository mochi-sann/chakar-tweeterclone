// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Post, User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
type Data = {
  posts: (Post & {
    auther: {
      image: string | null;
      name: string | null;
    };
  })[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.headers);
  const posts = await prisma.post.findMany({
    include: {
      auther: {
        select: {
          image: true,
          name: true,
        },
      },
    },
  });
  res.status(200).json({ posts: posts });
}
