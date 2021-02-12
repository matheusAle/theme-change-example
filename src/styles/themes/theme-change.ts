const themes = {
    dark: () => import(
        /* webpackChunkName: "theme-dark" */
        /* webpackMode: "lazy" */
        // @ts-ignore
        'style-loader?{"injectType":"styleTag"}!./bootstrap-theme-dark.scss'
        ),
    navy: () => import(
        /* webpackChunkName: "theme-navy" */
        /* webpackMode: "lazy" */
        // @ts-ignore
        'style-loader?{"injectType":"styleTag"}!./bootstrap-theme-navy.scss'
        ),
    light: () => import(
        /* webpackChunkName: "theme-light" */
        /* webpackMode: "lazy" */
        // @ts-ignore
        'style-loader?{"injectType":"styleTag"}!./bootstrap-theme-light.scss'
        ),
};

export type Theme =  keyof typeof themes;

export function themeChanger() {


    const getStyle = (theme: Theme): HTMLStyleElement | null => {
        return document.querySelector<HTMLStyleElement>(`[data-theme*=theme-${theme}]`);
    };

    const toggleStyle = (style: HTMLStyleElement, state: boolean) => {
        if (state) {
            style.removeAttribute('media');
        } else {
            style.setAttribute('media', 'max-width: 1px');
        }
    };

    const disableOthersStyles = (theme: Theme) => {
        const styles = document.querySelectorAll<HTMLStyleElement>(`[data-theme*=theme]:not([data-theme*=theme-${theme}])`);
        styles.forEach(style => toggleStyle(style, false));
    };

    const fetch = async (theme: Theme) => {
        const styles = new Set(document.querySelectorAll('style:not([url~=""])'));
        await themes[theme]();
        const themeStyle = Array.from(document.querySelectorAll('style')).filter(s => !styles.has(s))
            .find(s => s.innerText.startsWith(`/**@theme:${theme}`))

        if (themeStyle) {
            themeStyle.dataset.theme = `theme-${theme}`;
        }
    }

    return async (theme: Theme) => {
        const themeStyle = getStyle(theme);
        if (themeStyle) {
            toggleStyle(themeStyle, true);
            disableOthersStyles(theme);
            return;
        }
        await fetch(theme);
        disableOthersStyles(theme);
    };
}
