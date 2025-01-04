'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUserAlt } from 'react-icons/fa';

const Schedule = () => {
  const [activeTab, setActiveTab] = useState('Lundi');

  const scheduleData = [
    { day: 'Lundi', time: '09:00 - 10:00', course: 'Yoga', coach: 'Sarah', id: 1 },
    { day: 'Lundi', time: '10:00 - 11:00', course: 'Pilates', coach: 'Amina', id: 2 },
    { day: 'Lundi', time: '12:00 - 13:00', course: 'Cardio', coach: 'Imène', id: 3 },
    { day: 'Lundi', time: '14:00 - 15:00', course: 'Zumba', coach: 'Khadija', id: 4 },
    { day: 'Lundi', time: '16:00 - 17:00', course: 'HIIT', coach: 'Leila', id: 5 },

    { day: 'Mardi', time: '09:00 - 10:00', course: 'Cardio', coach: 'Sofia', id: 6 },
    { day: 'Mardi', time: '10:00 - 11:00', course: 'Pilates', coach: 'Tarek', id: 7 },
    { day: 'Mardi', time: '12:00 - 13:00', course: 'Yoga', coach: 'Sarah', id: 8 },
    { day: 'Mardi', time: '14:00 - 15:00', course: 'Stretching', coach: 'Leila', id: 9 },

    { day: 'Mercredi', time: '09:00 - 10:00', course: 'Zumba', coach: 'Khadija', id: 10 },
    { day: 'Mercredi', time: '11:00 - 12:00', course: 'HIIT', coach: 'Rachid', id: 11 },
    { day: 'Mercredi', time: '13:00 - 14:00', course: 'Boxe', coach: 'Imène', id: 12 },

    { day: 'Jeudi', time: '09:00 - 10:00', course: 'CrossFit', coach: 'Samira', id: 13 },
    { day: 'Jeudi', time: '11:00 - 12:00', course: 'Yoga', coach: 'Sarah', id: 14 },
    { day: 'Jeudi', time: '13:00 - 14:00', course: 'Cardio', coach: 'Sofia', id: 15 },

    { day: 'Vendredi', time: '11:00 - 12:00', course: 'Yoga', coach: 'Sarah', id: 16 },
    { day: 'Vendredi', time: '13:00 - 14:00', course: 'Cardio', coach: 'Sofia', id: 17 }
  ];

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="schedule" className="bg-black text-white py-16 px-6 lg:px-12">
      <div className="container mx-auto space-y-16">
        <motion.h2
          className="text-4xl font-extrabold text-yellow-500 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
         Programme des Cours Collectifs
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4 sm:flex-col sm:space-y-4 md:flex-row md:space-x-4">
          {['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'].map((day) => (
            <button
              key={day}
              onClick={() => setActiveTab(day)}
              className={`py-2 px-6 text-lg font-bold transition-colors duration-300 w-full sm:w-auto ${
                activeTab === day
                  ? 'bg-yellow-500 text-black rounded-lg'
                  : 'bg-gray-800 text-yellow-500 rounded-lg'
              }`}
             
            >
              {day}
            </button>
          ))}
        </div>

        <motion.div
          className="mt-8"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          {scheduleData
            .filter((entry) => entry.day === activeTab)
            .map((entry) => (
              <motion.div
                key={entry.id}
                className="bg-gray-800 p-6 rounded-lg shadow-lg mt-4"
                variants={itemVariants}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <FaCalendarAlt className="text-yellow-500 text-xl" />
                    <p className="text-lg">{entry.time}</p>
                  </div>
                  <div className="text-lg text-yellow-500">{entry.course}</div>
                  <div className="flex items-center space-x-3">
                    <FaUserAlt className="text-yellow-500 text-xl" />
                    <p className="text-lg">{entry.coach}</p>
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;
