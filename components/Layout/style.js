export default `
	body {
		margin:0;
		overflow-x: hidden;
	}

	.header {
		grid-area: header;
	}

	.body {
		grid-area: body;
	}


	.footer {
		grid-area: footer;
	}

	.site-grid {
		display: grid;
		grid-gap: 20px;
		grid-template-columns: 120px auto 120px;
		grid-template-areas:
		"header  		header 		header"
		"body       body      body"
		"footer  		footer  	footer";
	}
}
`