import en from '../languages/en.json';
import id from '../languages/id.json';

const languageType: string = import.meta.env.VITE_LANGUAGE;

const translator = (key: string): string => {
    return languageType === 'en' ? en[key as keyof typeof en] : id[key as keyof typeof id];
}


export default translator;