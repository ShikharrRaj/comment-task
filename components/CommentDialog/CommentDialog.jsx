import React from "react";
import EditMode from "./EditMode";
import ReviewMode from "./ReviewMode";

const CommentDialog = ({
  open,
  resetAll,
  onSubmit,
  fieldLabel,
  setFieldLabel,
  commentText,
  setCommentText,
  file,
  handleFileChange,
  isSubmitted,
  setIsSubmitted,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative">
        
        <button
          type="button"
          onClick={resetAll}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
        >
          ✕
        </button>

        {isSubmitted ? (
          <ReviewMode
            file={file}
            commentText={commentText}
            setIsSubmitted={setIsSubmitted}
            resetAll={resetAll}
          />
        ) : (
          <EditMode
            onSubmit={onSubmit}
            fieldLabel={fieldLabel}
            setFieldLabel={setFieldLabel}
            commentText={commentText}
            setCommentText={setCommentText}
            file={file}
            handleFileChange={handleFileChange}
            resetAll={resetAll}
          />
        )}
      </div>
    </div>
  );
};

export default CommentDialog;
