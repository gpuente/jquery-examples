$(document).ready(function () {

  $("#btn").click(function () {
    var tagname = $("#btn").parent().next().children("#textbx").prop("tagName");
    var val = $("#btn").parent().next().children("#textbx").val();
    console.debug(val);
  });

});

// ************* Selectores ***************
// next()
// nextAll()
// prev()
// prevAll()
// parent()
// parents()
// children()
// siblings()
// contents()
// add()
// closest()
// find()
// not()
// andSelf()
// get()
