import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/kit/vite'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    /**
     * https://kit.svelte.dev/docs/integrations#preprocessors
     * https://kit.svelte.dev/docs/adapter-auto
     * https://kit.svelte.dev/docs/adapters
     */
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter()
    }
}

export default config
