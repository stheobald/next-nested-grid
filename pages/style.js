export default `
	.top {
			grid-area: top;
		}
	.middle {
		grid-area: middle;
	}

	.bottom {
		grid-area: bottom;
	}
		
	.nested-grid {
		display: grid;
		background-color: #fff;
		color: #444;
		grid-gap: 1em;
		grid-template-columns: 120px auto 120px;
		grid-template-areas:
		"top  	top 			top"
		"middle 	middle 	middle"
		"bottom bottom bottom";
	}
`