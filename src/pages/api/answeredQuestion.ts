// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL || "",
  process.env.SUPABASE_SERVICE_KEY || ""
);

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const parsedBody = JSON.parse(req.body);
  await supabase.from("users").insert({
    user_id: parsedBody.user_id,
  });
  await supabase.from("sessions").insert(parsedBody);

  // don't care whether pass or fail
  return res.status(200);
}
