import { INLINES, BLOCKS } from "@contentful/rich-text-types";
import {
  blockAsset,
  blockEntry,
  blockHeading2,
  blockQuote,
  inlineAssetHyperlink,
  inlineEntryHyperlink,
  inlineHyperlink,
} from "./";
//import blockAsset from "./blockAsset";
// import blockEntry from "./blockEntry/blockEntry";
// import blockHeading2 from "./blockHeading2";
// import blockUnorderedList from "./blockUnorderedList";
// import inlineAssetHyperlink from "./inlineAssetHyperlink";
// import inlineEntryHyperlink from "./inlineEntryHyperlink";
// import inlineHyperlink from "./inlineHyperlink";

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => blockAsset(node),
    [BLOCKS.EMBEDDED_ENTRY]: (node) => blockEntry(node),
    [BLOCKS.HEADING_2]: (node, children) => blockHeading2(node, children),
    //[BLOCKS.UL_LIST]: (node) => blockUnorderedList(node),
    [BLOCKS.QUOTE]: (node) => blockQuote(node),
    [INLINES.ASSET_HYPERLINK]: (node, children) =>
      inlineAssetHyperlink(node, children),
    [INLINES.ENTRY_HYPERLINK]: (node, children) =>
      inlineEntryHyperlink(node, children),
    [INLINES.HYPERLINK]: (node, children) => inlineHyperlink(node, children),
  },
};

export default options;
