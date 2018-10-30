import * as React from 'react';

export class Ham extends React.Component {
    constructor(props) {
	super(props);
    }

    handleClicked() {
        this.props.toggleMenu();
    }

    render() {
	const hamUnicode = "\u2630";
	return (
            <div className="ham ham-main"
		 onClick={(e) => this.handleClicked(e)}>{hamUnicode}</div>
        );
    }
}
