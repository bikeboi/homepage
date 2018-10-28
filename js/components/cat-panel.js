import * as React from 'react';
import * as ClassNames from 'classnames';

export class Panel extends React.Component {
    constructor(props) {
	super(props);
        this.state = {
            hovered: false,
            clicked: false
        };
    }

    handleMouseEnter() {
	const current = this.state;
	this.setState({ hovered: true, clicked: current.clicked });
    }

    handleMouseLeave() {
	const current = this.state;
	this.setState({ hovered: false, clicked: current.clicked });
    }

    handleMouseDown() {
	const current = this.state;
        this.setState({ clicked: true, hovered: current.hovered });
    }

    handleMouseUp() {
	const current = this.state;
        this.setState({ clicked: false, hovered: current.hovered });
    }

    render() {
        let panelName = <div className="panel-name">{this.props.name}</div>;
        let panelBody = <div className="panel-content">{this.props.content}</div>;

	let panelClass = ClassNames('panel', `panel-${this.props.name}`, {
	    'panel-hovered': this.state.hovered,
            'panel-clicked': this.state.clicked
        });

	return (
            <div className={panelClass}
		 onMouseEnter={(e) => this.handleMouseEnter(e)}
              onMouseDown={(e) => this.handleMouseDown(e)}
              onMouseUp={(e) => this.handleMouseUp(e)}
              onMouseLeave={(e) => this.handleMouseLeave(e)}>
              {panelName}{panelBody}
            </div>
        );
    }
}
