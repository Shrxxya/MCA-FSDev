import React from 'react';

interface ConfirmModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

function ConfirmModal({ isOpen, onConfirm, onCancel }: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-200 bg-opacity-25 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-sm w-full">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Are you sure you want to submit?
        </h2>
        <div className="flex justify-center gap-4">
          <button
            onClick={onConfirm}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Yes
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
