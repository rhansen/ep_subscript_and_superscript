exports.collectContentPre = (hookName, context, cb) => {
  var tname = context.tname;
  var state = context.state;
  var lineAttributes = state.lineAttributes
  var tagIndex = tname;

  // make it so formatting isn't lost on edit
  if(tname === "sub") context.cc.doAttrib(state, tname);
  if(tname === "sup") context.cc.doAttrib(state, tname);
  return cb();
};

// never seems to be run
exports.collectContentPost = (hookName, context, cb) => {
/*
  var tname = context.tname;
  var state = context.state;
  var lineAttributes = state.lineAttributes
  var tagIndex = tname;

  if(tagIndex >= 0){
    delete lineAttributes['sub'];
  }
*/
  return cb();
};
