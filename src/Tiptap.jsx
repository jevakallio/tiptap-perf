import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { moby } from "./moby";

const Tiptap = ({ spellcheck }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: moby,
    onUpdate: () => {},
    editorProps: {
      attributes: {
        spellcheck: (!!spellcheck).toString(),
      },
    },
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;
