exports.extend                      = require('./extend');
exports.each                        = require('./each');
exports.validateOptions             = require('./validate-options');

exports.escapeRegExp                = require('./reg-exp/escape-reg-exp');
exports.elementRegExp               = require('./reg-exp/element-reg-exp');
exports.styleRegExp                 = require('./reg-exp/style-reg-exp');
exports.reactRegExp                 = require('./reg-exp/react-reg-exp');
exports.cssClassRegExp              = require('./reg-exp/css-class-reg-exp');

exports.getArrayOfClasses           = require('./markup/get-array-of-classes');
exports.getStyleProperties          = require('./markup/get-style-properties');
exports.createHtmlNode              = require('./markup/create-html-node');
exports.createHtmlFile              = require('./markup/create-html-file');
exports.splitHtml                   = require('./markup/split-html');
exports.splitReact                  = require('./markup/split-react');

exports.getMatchingClass            = require('./css/get-matching-class');
exports.getClassProps               = require('./css/get-class-props');
exports.mergeProps                  = require('./css/merge-props');

exports.createToken                 = require('./tokens/create-token');
