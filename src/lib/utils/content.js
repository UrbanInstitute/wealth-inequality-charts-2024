// A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review.

/**
 * True if a content value is an HTML list, which must not be wrapped in a <p>.
 * @param {string} value
 * @returns {boolean}
 */
export function isList(value) {
  return /^\s*<(ul|ol)[\s>]/i.test(value);
}
