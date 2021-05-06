import { request } from "./request";

export function getArticleById(articleId) {
  return request({
    url: `/article/${articleId}`,
  });
}

export function likeArticle(articleId) {
  return request({
    url: `/article/${articleId}/like`,
    method: "post",
  });
}

export function submitComment(articleId, form) {
  return request({
    url: `/article/${articleId}/comment`,
    method: "post",
    params: {
      commentPersonName: form.name,
      commentPersonEmail: form.email,
      commentContent: form.comment,
    }
  });
}

export function getAllComment(articleId) {
  return request({
    url: `/article/${articleId}/comment`,
  })
}
