import { request } from "./request";

export function getAllMessage() {
  return request({
    url: `/message`,
  });
}

export function submitMessage(submit) {
  return request({
    url: `/message`,
    method: "post",
    params: {
      messageUserName: submit.name,
      messageUserEmail: submit.email,
      messageContent: submit.message,
    },
  });
}
