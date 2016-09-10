function addComment() {
  // Gets text from username feild
  var username = document.getElementById("username").value
  // Gets text from comment feild
  var comment = document.getElementById("comment").value
  // Displays the data from the username feild
  var userNameText = document.createTextNode(username)
  // Displays the data from the comment feild
  var commentText = document.createTextNode(comment)
  // Creates a new LI
  var newListItem = document.createElement("LI")
  // Styles the LI
  newListItem.className = "list-group-item"
  // Creates H3 element
  var newUserName = document.createElement("H3")
  // Adds the username var to newUserName
  newUserName.appendChild(userNameText)
  // Creates P element
  var newComment = document.createElement("P")
  // Adds the comment var newComment
  newComment.appendChild(commentText)
  // Adds username data to LI
  newListItem.appendChild(newUserName)
  // Adds comment data to LI
  newListItem.appendChild(newComment)
  // displays the comment to the page
  document.getElementById("commentList").appendChild(newListItem)
}