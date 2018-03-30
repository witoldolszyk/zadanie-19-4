import uuid from uuid;
const boundAddComment = text => dispatch(addComment(text));
const boundEditComment = (text, id) => dispatch(editComment(text, id));
const boundremoveComment = id => dispatch(removeComment(id));
const boundThumbUpComment = id => dispatch(thumbUpComment(id,));
const boundThumbDownComment = id => dispatch(thumbDownComment(id));

function addComment(text) {
  return {
    type: ADD_COMMENT,
    text,
    id: uuid.v4()
  }
}

function editComment(text, id) {
  return {
    type: EDIT_COMMENT,
    text,
    id
  }
}

function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id
  }
}

function thumbUpComment (id) {
  return {
    type: THUMB_UP_COMMENT,
    id
  }
}

function thumbDownComment (id) {
  return {
    type: THUMB_DOWN_COMMENT,
    id
  }
}

boundAddComment('nowy komentarz');
boundEditComment('zmiana komentarza', 2);
boundremoveComment(2);
boundThumbUpComment(2);
boundThumbDownComment(2);
