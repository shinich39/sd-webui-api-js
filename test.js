import path from 'path';
import fs from 'fs';
import WEBUI from './index.js';

// img2img
;(async function() {
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
        "batch_count": 1,
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

    const upscalePayload = {
        "resize_mode": 0,
        "show_extras_results": false,
        "gfpgan_visibility": 0,
        "codeformer_visibility": 0,
        "codeformer_weight": 0,
        "upscaling_crop": true,
        "upscaler_1": "R-ESRGAN 4x+ Anime6B",
        "upscaler_2": "None",
        "extras_upscaler_2_visibility": 0,
        "upscale_first": false,
        "upscaling_resize": 2
    }

    const api = new WEBUI("127.0.0.1", "7860");

    console.log("isConnected:", await api.isConnected());

    const base64 = fs.readFileSync("./test/1.jpg", { encoding: "base64" })
        // .toString('utf-8'); // decode

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
})();