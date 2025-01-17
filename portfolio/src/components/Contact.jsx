import { CONTACT } from "../constants/Index";
import {motion} from 'framer-motion';
import { useTranslation } from 'react-i18next';


const Contact = () => {
    const { t } = useTranslation();

    return (
        <div id="contact" className="border-b border-neutral-900 pb-20">
            <motion.h2 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="my-10 text-center text-4xl">
                {t('contactTitle')}
            </motion.h2>
            <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="text-center tracking-tighter">
                <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }} 
                className="my-4">
                    {CONTACT.phoneNo}
                </motion.p>
                <a href="#" className="border-b">{CONTACT.email}</a>
            </motion.div>
        </div>
    );
}

export default Contact;