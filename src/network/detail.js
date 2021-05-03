import { request } from "./request";

export function getArticleById(articleId) {
  return request({
    url: `/article/${articleId}`,
  });
}
