'use strict';

const ROUTES = {
  txt2img: "/adapi/vi/img2img",
  img2img: "/adapi/vi/img2img",
}

class WEBUI {
  constructor(host, port) {
    this.__host__ = host ? host.replace(/https\:\/\/|http\:\/\//, "") : "127.0.0.1";
    this.__port__ = port ? Number(port) : 7860;
  }
}

WEBUI.prototype.url = function(route) {
  return "http://" + this.__host__ + ":" + this.__port__ + ROUTES[route];
}

WEBUI.prototype.post = async function(route, data) {
  const url = this.url(route);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  });

  return response.json();
}

WEBUI.prototype.txt2img = async function(data) {
  const response = this.post("txt2img", data);
  return response;
}

WEBUI.prototype.img2img = async function(data) {
  const response = this.post("img2img", data);
  return response;
}

export default WEBUI