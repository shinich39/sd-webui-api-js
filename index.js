'use strict';

const ROUTES = {
  info: "/info",
  getOptions: "/sdapi/v1/options",
  setOptions: "/sdapi/v1/options",
  txt2img: "/sdapi/v1/txt2img",
  img2img: "/sdapi/v1/img2img",
  upscale: "/sdapi/v1/extra-single-image",
}

class WEBUI {
  constructor(host, port) {
    this.__host__ = host ? host.replace(/https\:\/\/|http\:\/\//, "") : "127.0.0.1";
    this.__port__ = port ? Number(port) : 7860;
  }
}

WEBUI.prototype.__url__ = function(route) {
  return "http://" + this.__host__ + ":" + this.__port__ + ROUTES[route];
}

WEBUI.prototype.__payload__ = function(payload) {
  if (payload["batch_count"]) {
    payload["n_iter"] = payload["batch_count"];
    delete payload["batch_count"];
  }
  return payload;
}

WEBUI.prototype.__get__ = async function(url) {
  const response = await fetch(url, {
    method: "GET"
  });

  return response.json();
}

WEBUI.prototype.__post__ = async function(url, data) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: data ? JSON.stringify(data) : undefined,
  });

  return response.json();
}

WEBUI.prototype.isConnected = async function() {
  try {
    const url = this.__url__("info");
    await this.__get__(url);
    return true;
  } catch(err) {
    return false;
  }
}

WEBUI.prototype.info = async function() {
  const url = this.__url__("info");
  const response = await this.__get__(url);
  return response;
}

WEBUI.prototype.getOptions = async function() {
  const url = this.__url__("getOptions");
  const response = await this.__get__(url);
  return response;
}

WEBUI.prototype.setOptions = async function(payload) {
  const url = this.__url__("setOptions");
  const response = await this.__post__(url, payload);
  return response;
}

WEBUI.prototype.txt2img = async function(payload) {
  payload = this.__payload__(payload);

  const url = this.__url__("txt2img");
  const response = await this.__post__(url, payload);
  return response;
}

WEBUI.prototype.img2img = async function(base64, payload) {
  payload["init_images"] = Array.isArray(base64) ? base64 : [base64];
  payload = this.__payload__(payload);

  const url = this.__url__("img2img");
  const response = await this.__post__(url, payload);
  return response;
}

WEBUI.prototype.upscale = async function(base64, payload) {
  payload["image"] = base64;

  const url = this.__url__("upscale");
  const response = await this.__post__(url, payload);
  return response;
}

export default WEBUI