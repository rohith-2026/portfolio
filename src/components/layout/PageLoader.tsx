import { AnimatePresence, motion } from "framer-motion";

export function PageLoader({ visible }: { visible: boolean }) { return <AnimatePresence>{visible && <motion.div className="page-loader" initial={{ opacity: 1 }} exit={{ opacity: 0 }}><span className="loader-mark">R</span><span>Loading a little bit of wonder…</span></motion.div>}</AnimatePresence>; }
