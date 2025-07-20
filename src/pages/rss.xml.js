import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";
import MarkdownIt from "markdown-it";
import { getCollectionWithoutDrafts } from "../utils/collections";

const parser = new MarkdownIt();

export async function GET(context) {
  const posts = await getCollectionWithoutDrafts("blog");

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.id}/`,
      content: parser.render(post.body),
    })),
  });
}
