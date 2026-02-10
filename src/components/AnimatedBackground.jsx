import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-linear-to-br from-slate-950 via-purple-950 to-slate-900 animated-bg">
      {/* Orbe grande púrpura - arriba izquierda */}
      <motion.div
        className="absolute -top-40 -left-40 w-50 h-50 bg-purple-500 rounded-full blur-3xl"
        animate={{ 
          x: [0, 100, -50, 0], 
          y: [0, -180, 60, 0],
          scale: [1, 1.2, 0.9, 1]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />

      {/* Orbe azul - arriba derecha */}
      <motion.div
        className="absolute -top-20 -right-20 w-125 h-125 bg-blue-600/35 rounded-full blur-3xl"
        animate={{ 
          x: [0, -120, 80, 0], 
          y: [0, 100, -60, 0],
          scale: [1, 0.8, 1.3, 1]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Orbe rosa - centro */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-87.5 h-87.5 bg-pink-400/50 rounded-full blur-3xl"
        animate={{ 
          x: [0, 150, -100, 0], 
          y: [0, -120, 90, 0],
          scale: [1, 1.1, 0.95, 1]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Orbe índigo - abajo derecha */}
      <motion.div
        className="absolute -bottom-40 -right-40 w-125 h-85 bg-indigo-500/60 rounded-full blur-3xl"
        animate={{ 
          x: [0, -110, 85, 0], 
          y: [0, 95, -75, 0],
          scale: [1, 0.9, 1.25, 1]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: .5
        }}
      />

      {/* Capa de overlay sutil para mejorar legibilidad del contenido */}
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
}