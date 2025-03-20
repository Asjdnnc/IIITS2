import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa6';
import FeedbackForm from './FeedbackForm';

const MessageIcon = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="fixed bottom-3 left-3 z-50">
        <button
          className="w-12 h-12 rounded-lg bg-gray-900 hover:bg-teal-600 transition flex justify-center items-center shadow-lg"
          onClick={() => setShowForm(true)}
        >
          <FaEnvelope className="text-white text-2xl" />
        </button>
      </div>

      {showForm && <FeedbackForm onClose={() => setShowForm(false)} />}
    </>
  );
};

export default MessageIcon;