import { request } from "./request";

export function getArticleById(articleId) {
  return request({
    url: `/article/${articleId}`,
  });
}

export function likeArticle(articleId) {
  return request({
    url: `/article/${articleId}/like`,
    method: 'post'
  })
}
