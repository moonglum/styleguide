module.exports = ({ paramString, highlightedBlock, renderedBlockURI }) => {
	let blockId = "_" + renderedBlockURI.replace(/[./:]/g, "-");
	return `<tabs-control role="tablist">
	<button role="tab" aria-selected="true" aria-controls="${blockId}-frame">
		Preview
	</button>
	<button role="tab" aria-selected="false" aria-controls="${blockId}-pre">
		Source
	</button>
	<button role="tab" aria-selected="false" aria-controls="${blockId}-post">
		HTML
	</button>
</tabs-control>
<component-preview preview="rendered" class="component-preview" ${paramString}>
	<iframe id="${blockId}-frame" class="component-preview-frame rendered" src="${renderedBlockURI}"></iframe>
	<pre hidden id="${blockId}-pre" class="component-preview-pre-code">${highlightedBlock}</pre>
	<external-text hidden id="${blockId}-post" class="component-preview-post-code" src="${renderedBlockURI}" wrap="pre"></external-text>
</component-preview>`;
};
