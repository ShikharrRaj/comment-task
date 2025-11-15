import React from "react";
import FilePreview from "./FilePreview";

const ReviewMode = ({
  commentText,
  file,
  resetAll,
  setIsSubmitted,
}) => {
  return (
    <>
      <label className="text-[14px] text-gray-500">Current value</label>
      <div className="mb-4 text-[16px]">
        The quick brown fox jumps over the lazy dog
      </div>

      <label className="text-[14px] text-gray-500">Comment</label>
      <div className="mb-4 text-[16px]">{commentText}</div>

      <label className="text-[14px] text-gray-500 mb-1">
        Supporting document attached
      </label>
      <FilePreview file={file} />

      <div className="flex justify-between mt-4">
        <button
          type="button"
          onClick={resetAll}
          className="border border-orange-500 text-orange-500 py-2 px-6 rounded-full hover:bg-orange-50"
        >
          Delete Comment
        </button>

        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600"
        >
          Edit Comment
        </button>
      </div>
    </>
  );
};

export default ReviewMode;
