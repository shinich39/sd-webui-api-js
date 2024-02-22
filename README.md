## sd-webui-api-js

.

## Usage

```js
import WEBUI from 'sd-webui-api-js';

const api = new WEBUI("127.0.0.1", "7860");

const isConneted = await api.isConnected();
// true
```

- options

```js

const res = await api.getOptions();

const payload = {
    "samples_save": true,
    "samples_format": "png",
    "samples_filename_pattern": "",
    "save_images_add_number": true,
    "save_images_replace_action": "Replace",
    "grid_save": true,
    "grid_format": "png",
    "grid_extended_filename": false,
    "grid_only_if_multiple": true,
    "grid_prevent_empty_spots": false,
    "grid_zip_filename_pattern": "",
    "n_rows": -1,
    "font": "",
    "grid_text_active_color": "#000000",
    "grid_text_inactive_color": "#999999",
    "grid_background_color": "#ffffff",
    "save_images_before_face_restoration": false,
    "save_images_before_highres_fix": false,
    "save_images_before_color_correction": false,
    "save_mask": false,
    "save_mask_composite": false,
    "jpeg_quality": 80,
    "webp_lossless": false,
    "export_for_4chan": true,
    "img_downscale_threshold": 4,
    "target_side_length": 4000,
    "img_max_size_mp": 200,
    "use_original_name_batch": true,
    "use_upscaler_name_as_suffix": false,
    "save_selected_only": true,
    "save_init_img": false,
    "temp_dir": "",
    "clean_temp_dir_at_start": false,
    "save_incomplete_images": false,
    "notification_audio": true,
    "notification_volume": 100,
    "outdir_samples": "",
    "outdir_txt2img_samples": "outputs/txt2img-images",
    "outdir_img2img_samples": "outputs/img2img-images",
    "outdir_extras_samples": "outputs/extras-images",
    "outdir_grids": "",
    "outdir_txt2img_grids": "outputs/txt2img-grids",
    "outdir_img2img_grids": "outputs/img2img-grids",
    "outdir_save": "log/images",
    "outdir_init_images": "outputs/init-images",
    "save_to_dirs": true,
    "grid_save_to_dirs": true,
    "use_save_to_dirs_for_ui": false,
    "directories_filename_pattern": "[date]",
    "directories_max_prompt_words": 8,
    "ESRGAN_tile": 192,
    "ESRGAN_tile_overlap": 8,
    "realesrgan_enabled_models": [
        "R-ESRGAN 4x+",
        "R-ESRGAN 4x+ Anime6B"
    ],
    "upscaler_for_img2img": "string",
    "face_restoration": false,
    "face_restoration_model": "CodeFormer",
    "code_former_weight": 0.5,
    "face_restoration_unload": false,
    "auto_launch_browser": "Local",
    "enable_console_prompts": false,
    "show_warnings": false,
    "show_gradio_deprecation_warnings": true,
    "memmon_poll_rate": 8,
    "samples_log_stdout": false,
    "multiple_tqdm": true,
    "print_hypernet_extra": false,
    "list_hidden_files": true,
    "disable_mmap_load_safetensors": false,
    "hide_ldm_prints": true,
    "dump_stacks_on_signal": false,
    "api_enable_requests": true,
    "api_forbid_local_requests": true,
    "api_useragent": "",
    "unload_models_when_training": false,
    "pin_memory": false,
    "save_optimizer_state": false,
    "save_training_settings_to_txt": true,
    "dataset_filename_word_regex": "",
    "dataset_filename_join_string": " ",
    "training_image_repeats_per_epoch": 1,
    "training_write_csv_every": 500,
    "training_xattention_optimizations": false,
    "training_enable_tensorboard": false,
    "training_tensorboard_save_images": false,
    "training_tensorboard_flush_every": 120,
    "sd_model_checkpoint": "string",
    "sd_checkpoints_limit": 1,
    "sd_checkpoints_keep_in_cpu": true,
    "sd_checkpoint_cache": 0,
    "sd_unet": "Automatic",
    "enable_quantization": false,
    "enable_emphasis": true,
    "enable_batch_seeds": true,
    "comma_padding_backtrack": 20,
    "CLIP_stop_at_last_layers": 1,
    "upcast_attn": false,
    "randn_source": "GPU",
    "tiling": false,
    "hires_fix_refiner_pass": "second pass",
    "sdxl_crop_top": 0,
    "sdxl_crop_left": 0,
    "sdxl_refiner_low_aesthetic_score": 2.5,
    "sdxl_refiner_high_aesthetic_score": 6,
    "sd_vae_checkpoint_cache": 0,
    "sd_vae": "Automatic",
    "sd_vae_overrides_per_model_preferences": true,
    "auto_vae_precision": true,
    "sd_vae_encode_method": "Full",
    "sd_vae_decode_method": "Full",
    "inpainting_mask_weight": 1,
    "initial_noise_multiplier": 1,
    "img2img_extra_noise": 0,
    "img2img_color_correction": false,
    "img2img_fix_steps": false,
    "img2img_background_color": "#ffffff",
    "img2img_editor_height": 720,
    "img2img_sketch_default_brush_color": "#ffffff",
    "img2img_inpaint_mask_brush_color": "#ffffff",
    "img2img_inpaint_sketch_default_brush_color": "#ffffff",
    "return_mask": false,
    "return_mask_composite": false,
    "img2img_batch_show_results_limit": 32,
    "cross_attention_optimization": "Automatic",
    "s_min_uncond": 0,
    "token_merging_ratio": 0,
    "token_merging_ratio_img2img": 0,
    "token_merging_ratio_hr": 0,
    "pad_cond_uncond": false,
    "persistent_cond_cache": true,
    "batch_cond_uncond": true,
    "use_old_emphasis_implementation": false,
    "use_old_karras_scheduler_sigmas": false,
    "no_dpmpp_sde_batch_determinism": false,
    "use_old_hires_fix_width_height": false,
    "dont_fix_second_order_samplers_schedule": false,
    "hires_fix_use_firstpass_conds": false,
    "use_old_scheduling": false,
    "interrogate_keep_models_in_memory": false,
    "interrogate_return_ranks": false,
    "interrogate_clip_num_beams": 1,
    "interrogate_clip_min_length": 24,
    "interrogate_clip_max_length": 48,
    "interrogate_clip_dict_limit": 1500,
    "interrogate_clip_skip_categories": [],
    "interrogate_deepbooru_score_threshold": 0.5,
    "deepbooru_sort_alpha": true,
    "deepbooru_use_spaces": true,
    "deepbooru_escape": true,
    "deepbooru_filter_tags": "",
    "extra_networks_show_hidden_directories": true,
    "extra_networks_dir_button_function": false,
    "extra_networks_hidden_models": "When searched",
    "extra_networks_default_multiplier": 1,
    "extra_networks_card_width": 0,
    "extra_networks_card_height": 0,
    "extra_networks_card_text_scale": 1,
    "extra_networks_card_show_desc": true,
    "extra_networks_card_order_field": "Path",
    "extra_networks_card_order": "Ascending",
    "extra_networks_add_text_separator": " ",
    "ui_extra_networks_tab_reorder": "",
    "textual_inversion_print_at_load": false,
    "textual_inversion_add_hashes_to_infotext": true,
    "sd_hypernetwork": "None",
    "keyedit_precision_attention": 0.1,
    "keyedit_precision_extra": 0.05,
    "keyedit_delimiters": ".,\\/!?%^*;:{}=`~() ",
    "keyedit_delimiters_whitespace": [
        "Tab",
        "Carriage Return",
        "Line Feed"
    ],
    "keyedit_move": true,
    "disable_token_counters": false,
    "return_grid": true,
    "do_not_show_images": false,
    "js_modal_lightbox": true,
    "js_modal_lightbox_initially_zoomed": true,
    "js_modal_lightbox_gamepad": false,
    "js_modal_lightbox_gamepad_repeat": 250,
    "gallery_height": "",
    "compact_prompt_box": false,
    "samplers_in_dropdown": true,
    "dimensions_and_batch_together": true,
    "sd_checkpoint_dropdown_use_short": false,
    "hires_fix_show_sampler": false,
    "hires_fix_show_prompts": false,
    "txt2img_settings_accordion": false,
    "img2img_settings_accordion": false,
    "localization": "None",
    "quicksettings_list": [
        "sd_model_checkpoint"
    ],
    "ui_tab_order": [],
    "hidden_tabs": [],
    "ui_reorder_list": [],
    "gradio_theme": "Default",
    "gradio_themes_cache": true,
    "show_progress_in_title": true,
    "send_seed": true,
    "send_size": true,
    "enable_pnginfo": true,
    "save_txt": false,
    "add_model_name_to_info": true,
    "add_model_hash_to_info": true,
    "add_vae_name_to_info": true,
    "add_vae_hash_to_info": true,
    "add_user_name_to_info": false,
    "add_version_to_infotext": true,
    "disable_weights_auto_swap": true,
    "infotext_skip_pasting": [],
    "infotext_styles": "Apply if any",
    "show_progressbar": true,
    "live_previews_enable": true,
    "live_previews_image_format": "png",
    "show_progress_grid": true,
    "show_progress_every_n_steps": 10,
    "show_progress_type": "Approx NN",
    "live_preview_allow_lowvram_full": false,
    "live_preview_content": "Prompt",
    "live_preview_refresh_period": 1000,
    "live_preview_fast_interrupt": false,
    "js_live_preview_in_modal_lightbox": false,
    "hide_samplers": [],
    "eta_ddim": 0,
    "eta_ancestral": 1,
    "ddim_discretize": "uniform",
    "s_churn": 0,
    "s_tmin": 0,
    "s_tmax": 0,
    "s_noise": 1,
    "k_sched_type": "Automatic",
    "sigma_min": 0,
    "sigma_max": 0,
    "rho": 0,
    "eta_noise_seed_delta": 0,
    "always_discard_next_to_last_sigma": false,
    "sgm_noise_multiplier": false,
    "uni_pc_variant": "bh1",
    "uni_pc_skip_type": "time_uniform",
    "uni_pc_order": 3,
    "uni_pc_lower_order_final": true,
    "postprocessing_enable_in_main_ui": [],
    "postprocessing_operation_order": [],
    "upscaling_max_images_in_cache": 5,
    "postprocessing_existing_caption_action": "Ignore",
    "disabled_extensions": [],
    "disable_all_extensions": "none",
    "restore_config_state_file": "",
    "sd_checkpoint_hash": "",
    "sd_lora": "None",
    "lora_preferred_name": "Alias from file",
    "lora_add_hashes_to_infotext": true,
    "lora_show_all": false,
    "lora_hide_unknown_for_versions": [],
    "lora_in_memory_limit": 0,
    "lora_functional": false,
    "canvas_hotkey_zoom": "Alt",
    "canvas_hotkey_adjust": "Ctrl",
    "canvas_hotkey_move": "F",
    "canvas_hotkey_fullscreen": "S",
    "canvas_hotkey_reset": "R",
    "canvas_hotkey_overlap": "O",
    "canvas_show_tooltip": true,
    "canvas_auto_expand": true,
    "canvas_blur_prompt": false,
    "canvas_disabled_functions": [
        "Overlap"
    ],
    "extra_options_txt2img": [],
    "extra_options_img2img": [],
    "extra_options_cols": 1,
    "extra_options_accordion": false
}

const res = await api.setOptions(payload);
```

- img2img

```js

const base64 = fs.readFileSync("./test/1.jpg", { encoding: "base64" })

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
    let dstPath = "./test/"+String(index).padStart(4, "0") + ".png";
    let isExists = fs.existsSync(dstPath);

    while(isExists) {
        index++;
        dstPath = "./test/"+String(index).padStart(4, "0") + ".png";
        isExists = fs.existsSync(dstPath);
    }

    fs.writeFileSync(dstPath, image, { encoding: "base64" });
}
```
- upscale

```js
const res = await api.upscale(base64, {
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
    "upscaling_resize": 2 // scale_by
});

const image = res.image; // base64

let index = 0;
let dstPath = "./test/"+String(index).padStart(4, "0") + ".png";
let isExists = fs.existsSync(dstPath);

while(isExists) {
    index++;
    dstPath = "./test/"+String(index).padStart(4, "0") + ".png";
    isExists = fs.existsSync(dstPath);
}

fs.writeFileSync(dstPath, image, { encoding: "base64" });
```

- Fix Headers Timeout Error

```js
// index.js
import { Agent } from "undici";

WEBUI.prototype.__post__ = async function(url, data) {
    ...
    const response = await fetch(url, {
        ...
        dispatcher: new Agent({
            bodyTimeout: 1000 * 60 * 10, // default 300s
            headersTimeout: 1000 * 60 * 10, // default 300s
        })
    });
    ...
}
```