import clsx from "clsx";
import { useDropzone } from "react-dropzone";
import { FaCheckCircle, FaExclamationTriangle, FaUpload } from "react-icons/fa";
import { handleUploadFile } from "@/lib/utils";
import { useState } from "react";
import { toast } from "react-toastify";

export const Dropzone = ({ handleSubmit }) => {
  const validator = (file) => {
    setUploadError("");
    const fileExtension = file.name.split(".").at(-1);

    if ((file.size * 0.000001).toFixed(3) > 10) {
      return {
        code: "too-large",
        message: "File size is larger than 10mb",
      };
    }

    if (fileExtension !== "xlsx" && fileExtension !== "xls") {
      return {
        code: "invalid-file",
        message: "Choose a .xlsx or .xls file",
      };
    }

    if (file.length > 1) {
      return {
        code: "too-many",
        message: "Choose one file at a time",
      };
    }

    return null;
  };

  const {
    getRootProps,
    fileRejections,
    getInputProps,
    acceptedFiles,
    isDragActive,
    isDragReject,
    inputRef,
  } = useDropzone({
    multiple: false,
    maxFiles: 1,
    validator,
  });

  const [uploadError, setUploadError] = useState("");

  const files = acceptedFiles.map((file) => (
    <li key={file.path} className="flex items-center gap-2">
      <FaCheckCircle /> {file.path} - {(file.size * 0.000001).toFixed(3)} mb
    </li>
  ));

  const rejectedFiles = fileRejections.map(({ file, errors }) =>
    errors.map((e) => (
      <li key={file.path} className="flex items-center gap-2">
        <FaExclamationTriangle /> {e.message}
      </li>
    ))
  );

  const upload = async () => {
    const file = acceptedFiles[0];

    if (acceptedFiles.length > 0) {
      handleUploadFile(file)
        .then((membersFromFile) => {
          if (membersFromFile.length > 0) {
            acceptedFiles.length = 0;
            acceptedFiles.splice(0, acceptedFiles.length);
            inputRef.current.value = "";
          } else {
            setUploadError('No column titled "members"');
          }

          handleSubmit(membersFromFile);
          toast.success("Upload success");
        })
        .catch((error) => {
          console.log({ error });
        });

      // Clear form
    }
  };

  const errorStyles = "border-red-500 bg-red-500 bg-opacity-10";
  const dragActiveStyles = "border-slate-500 bg-slate-800";
  const acceptedStyles = "border-blue-500 bg-slate-800";

  return (
    <>
      <div
        {...getRootProps({
          className: clsx(
            "max-w-lg border h-40 sm:h-52 lg:h-60 rounded-md grid place-content-center gap-2 text-white cursor-pointer",
            isDragActive && dragActiveStyles,
            acceptedFiles && !uploadError && acceptedStyles,
            isDragReject || (uploadError && errorStyles)
          ),
        })}
      >
        <input {...getInputProps()} className="input-zone" />

        <div className="text-center">
          <p className="dropzone-content">
            {isDragActive
              ? "Drop it here"
              : "Click here or drop a file to upload!"}
            {isDragReject && "Files rejected"}
          </p>
        </div>

        <aside className="text-center max-w-sm mx-auto">
          <ul className="text-blue-500">{files}</ul>
          <ul className="text-red-400">{rejectedFiles}</ul>
        </aside>

        {uploadError && (
          <p className="text-red-400 text-center">{uploadError}</p>
        )}
      </div>

      {acceptedFiles.length > 0 && (
        <button
          className="btn primary flex gap-2 items-center justify-center mt-2 w-fit mx-auto"
          onClick={upload}
        >
          <FaUpload /> Upload file
        </button>
      )}
    </>
  );
};
