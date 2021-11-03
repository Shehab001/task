function validateFormm() {
    let x = document.forms["myFormm"]["subject"].value;
    if (x == "") {
      alert("Need name and password");
      return false;
    }
  }

function validateForm() {
    let x = document.forms["myForm"]["subject"].value;
    if (x == "") {
      alert("Feedback must be filled out");
      return false;
    }
  }