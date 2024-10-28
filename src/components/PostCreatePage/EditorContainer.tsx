import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";

export const EditorContainer = () => {
  return (
    <div className="flex w-full flex-col gap-4 rounded-lg border-2 border-solid border-gray py-7 pl-3 pr-6">
      <div className="flex flex-col gap-3">
        <h2 className="text-24 font-semibold">질문하고 싶은 코드를 작성해주세요</h2>
        <p className="text-20 font-medium text-primary">주석으로 설명을 추가해주세요.</p>

        <Editor
          initialValue="질문하시고 싶은 코드 또는 내용을 작성해주세요."
          previewStyle="vertical"
          height="80vh"
          initialEditType="markdown"
          useCommandShortcut={true}
          className="max-w-sm"
        />
      </div>
    </div>
  );
};

export default EditorContainer;
