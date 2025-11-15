import React from "react";
import { ReactComponent as UploadIcon } from "../../icons/upload-icon.svg";

const EditMode = ({
  onSubmit,
  fieldLabel,
  setFieldLabel,
  commentText,
  setCommentText,
  file,
  handleFileChange,
  resetAll,
}) => {

  return (
    <form onSubmit={onSubmit}>
      <label className="text-[14px] text-gray-500">Current value</label>
      <div className="text-[16px] mb-4">
        The quick brown fox jumps over the lazy dog
      </div>

      <div className="mb-3">
        <label className="text-[14px] text-gray-500">Field label</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Placeholder"
          value={fieldLabel}
          onChange={(e) => setFieldLabel(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="text-[14px] text-gray-500">Comment</label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md min-h-[90px]"
          placeholder="Please provide a reason for the change"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
      </div>

      <div className="mb-5">
        <label className="text-[14px] text-gray-500">
          Upload support document
        </label>

        <label className="flex items-center justify-between border border-gray-300 rounded-md px-3 py-2 cursor-pointer bg-white">
          <span className="text-gray-400 text-sm">
            {file ? file.name : "Select a file to upload"}
          </span>

          <UploadIcon className="w-5 h-5 text-gray-400" />

          <input
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={resetAll}
          className="border border-orange-500 text-orange-500 py-2 px-6 rounded-full hover:bg-orange-50"
        >
          Discard
        </button>

        <button
          type="submit"
          className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600"
        >
          Submit Suggestion
        </button>
      </div>
    </form>
  );
};

export default EditMode;
