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

export function submitComment(articleId, submit) {
  return request({
    url: `/article/${articleId}/comment`,
    method: "post",
    params: {
      commentPid: submit.replyId,
      commentPersonName: submit.name,
      commentPersonEmail: submit.email,
      commentContent: submit.comment,
      respondUser: submit.replyName,
    },
  });
}

export function getAllComment(articleId) {
  return request({
    url: `/article/${articleId}/comment`,
  });
}
