## sd-webui-api-js

.

## Usage

```js
import WEBUI from 'sd-webui-api-js';


const api = new WEBUI("127.0.0.1", "7860");

const isConneted = await api.isConnected();
// true

const base64 = fs.readFileSync("./test/1.jpg", { encoding: "base64" })
// .toString('utf-8'); // decode

const payload = {
    "prompt": "masterpiece, best quality,",
    "negative_prompt": "(worst quality, low quality:1.4),",
    "seed": -1,
    "to_scale": false, // scale_by disabled
    "width": 1024,
    "height": 1024,
    "resize_mode": 0,
    "cfg_scale": 10,
    "denoising_strength": 0.1,
    "steps": 20,
    "sampler_name": "Euler a",
    "batch count": 1,
    "batch_size": 1,
    "clip_skip": 2,
    "do_not_save_samples": true,
    "do_not_save_grid": true,
    "script_name": null,
    "script_args": [],
    "override_settings": {
        "sd_model_checkpoint": "meinamix_meinaV11.safetensors",
        "sd_vae": "kl-f8-anime2.ckpt"
    },
    "override_settings_restore_afterwards": true,
    "alwayson_scripts": {}
}

const res = await api.img2img(base64, payload);

for (let i = 0; i < res.images.length; i++) {
    const image = res.images[i]; // base64

    let index = 0;
    let filename = String(index).padStart(4, "0") + ".png";
    let filePath = "./test/"+filename;
    let isExists = fs.existsSync(filePath);

    while(isExists) {
        index++;
        filename = String(index).padStart(4, "0") + ".png";
        filePath = "./test/"+filename;
        isExists = fs.existsSync(filePath);
    }

    fs.writeFileSync(filePath, image, { encoding: "base64" });
}
```