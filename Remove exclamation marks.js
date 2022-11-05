//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

//Arrow version
removeExclamationMarks = s => s.replace(/!/gi, '')

//Regular version
function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
  }
