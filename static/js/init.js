$(document).ready(function () {
  var codeBlocks = $("pre code");
  if (codeBlocks.length) {
    $("pre code").each(function (i, block) {
      hljs.highlightBlock(block);
    });
  } else {
    return;
  }
});