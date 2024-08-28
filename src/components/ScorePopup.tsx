import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ScorePopupProps {
  isOpen: boolean;
  onClose: () => void;
  score: number;
}

const ScorePopup: React.FC<ScorePopupProps> = ({ isOpen, onClose, score }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent className="sm:max-w-[425px] bg-gray-900 border-2 border-yellow-500 rounded-lg shadow-lg">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 text-center"
            >
              <motion.h2 
                className="text-4xl font-bold mb-6 text-yellow-500"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Round Complete!
              </motion.h2>
              <motion.div
                className="bg-gray-800 p-6 rounded-lg mb-6"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold mb-2 text-white">Your Score</h3>
                <motion.p 
                  className="text-7xl font-bold text-green-500"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
                >
                  {score}
                </motion.p>
              </motion.div>
              <motion.button
                className="px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
              >
                Continue
              </motion.button>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default ScorePopup;
