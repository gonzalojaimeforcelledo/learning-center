import en from'./locales/en.json';
import es from'./locales/es.json';

const i18n = createI18n({
    legacy: false,
    locale: en,
    fallbackLocale: 'en',
    messages: {
        en,
        es
    }
});

export default i18n;