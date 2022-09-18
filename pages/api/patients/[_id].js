import "@/lib/db";
import { del, edit } from "@/pages/api/patients";

export default async function handlerReq(req, res) {
  const { method } = req;

  switch (method) {
    case "DELETE":
      del(req, res);

      break;
    case "PUT":
      edit(req, res);
      break;
    default:
      res.status(405).send("Method Not Allowed");
      break;
  }
}
