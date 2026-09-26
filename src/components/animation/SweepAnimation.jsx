import { motion } from "motion/react"

export const SweepAnimation = ({t,curtain}) => (<motion.div
                                        aria-hidden="true"
                                        className={`fixed inset-0 z-50 pointer-events-none ${t.accentBg}`}
                                        style={{ originX: curtain === "retreat" ? 1 : 0 }}
                                        animate={{ scaleX: curtain === "sweep" ? 1 : 0 }}
                                        transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
                                    />)