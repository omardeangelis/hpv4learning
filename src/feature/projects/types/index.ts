import { Get } from "type-fest";

export type ArticleNodeProps = Get<
  Queries.SingleProjectQuery,
  ["allContentfulProgetti", "nodes", "0"]
>;
