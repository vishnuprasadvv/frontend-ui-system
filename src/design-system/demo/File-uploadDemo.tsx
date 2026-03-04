import * as React from "react";
import { FileUpload } from "../components/FileUpload/file-upload";

export function FileUploadDemo() {
  const [files, setFiles] = React.useState<File[]>([]);

  return (
    <div className="max-w-md space-y-6">
      <FileUpload
        label="Upload Resume"
        multiple
        maxFiles={3}
        maxSize={5 * 1024 * 1024} // 5MB
        accept=".pdf,.doc,.docx"
        value={files}
        onChange={setFiles}
        helperText="Only PDF or DOC files. Max 5MB each."
      />

      <div className="text-sm text-muted-foreground">
        <p>Selected Files:</p>
        <ul className="list-disc ml-4">
          {files.map((file, index) => (
            <li key={index}>
              {file.name} ({(file.size / 1024).toFixed(1)} KB)
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}