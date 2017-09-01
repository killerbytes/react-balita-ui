import React from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export function getPlainText(html){
    const contentBlock = htmlToDraft(html);
    const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
    return contentState.getPlainText()
}

export function setContent (html){
    const contentBlock = htmlToDraft(html);
    const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);

    return EditorState.createWithContent(contentState);
}

export function getContent (editorState){
    console.log(convertToRaw( editorState.getCurrentContent()))
    return convertToRaw( editorState.getCurrentContent())
    // return draftToHtml(convertToRaw(editorState.getCurrentContent()))
}



export function TextEditor ({editorState, onEditorStateChange, isPreview}){
    const wrapperClassName = isPreview ? 'azd-editor editor-preview' : 'azd-editor'

    return (
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbarHidden={isPreview}
        readOnly={isPreview}
        wrapperClassName={wrapperClassName}/>
    )
}

export default TextEditor;
