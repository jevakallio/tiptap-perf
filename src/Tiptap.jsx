import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { moby } from "./moby";
const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: moby,
    onUpdate: () => {},
    editorProps: {
      attributes: {
        spellcheck: "false",
      },
    },
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;
