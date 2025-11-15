import React from "react";
import { ReactComponent as ViewIcon } from "../../icons/view-icon.svg";
import { ReactComponent as DownloadIcon } from "../../icons/download-icon.svg";

const FilePreview = ({ file }) => {
  if (!file) return null;

  return (
    <div className="flex items-center justify-between w-full border border-gray-300 rounded-md p-3 bg-white mb-5">
      <div className="flex items-start gap-3">
        {/* Red file box */}
        <div className="w-10 h-12 bg-red-100 text-red-600 flex items-center justify-center rounded">
          <span className="text-xs font-bold">file</span>
        </div>

        <div className="flex flex-col">
          <span className="font-medium text-gray-800">{file.name}</span>
          <span className="text-sm text-gray-400">
            {(file.size / (1024 * 1024)).toFixed(1)} MB
          </span>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => window.open(URL.createObjectURL(file))}
          className="border border-gray-300 rounded-md p-2"
        >
          <ViewIcon className="w-4 h-4 text-gray-600" />
        </button>

        <button
          type="button"
          onClick={() => {
            const url = URL.createObjectURL(file);
            const a = document.createElement("a");
            a.href = url;
            a.download = file.name;
            a.click();
          }}
          className="border border-gray-300 rounded-md p-2"
        >
          <DownloadIcon className="w-4 h-4 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default FilePreview;
