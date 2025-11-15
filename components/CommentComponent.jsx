import React, { useState } from "react";
import CommentDialog from "./CommentDialog/CommentDialog";

const CommentComponent = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [fieldLabel, setFieldLabel] = useState("");
  const [commentText, setCommentText] = useState("");
  const [file, setFile] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setIsSubmitted(false);
  };

  const resetAll = () => {
    setFieldLabel("");
    setCommentText("");
    setFile(null);
    setIsSubmitted(false);
    setDialogOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fieldLabel || !commentText || !file) {
      alert("Please fill all fields and upload a file.");
      return;
    }

    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center mt-16">
      <button
        className="bg-white text-violet-600 border border-violet-600 px-4 py-2 rounded hover:bg-violet-50"
        onClick={() => setDialogOpen(true)}
      >
        Comment
      </button>

      <CommentDialog
        open={dialogOpen}
        resetAll={resetAll}
        file={file}
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
        onSubmit={handleSubmit}
        fieldLabel={fieldLabel}
        setFieldLabel={setFieldLabel}
        commentText={commentText}
        setCommentText={setCommentText}
        handleFileChange={handleFileChange}
      />
    </div>
  );
};

export default CommentComponent;
