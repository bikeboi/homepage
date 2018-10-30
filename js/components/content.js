import * as React from 'react';
import * as ClassNames from 'classnames';

class InfoMenu extends React.Component {
    render() {
	const classes = ClassNames('info-menu', {
	    'info-menu-shown': this.props.visible
        });
	return <div className={classes}>Info Menu</div>;
    }
}

export class Content extends React.Component {
    constructor(props) {
	super(props);
        this.state = { menuShown: false };
    }

    toggleInfoMenu() {
	this.setState({ menuShown: !(this.state.menuShown) });
        this.props.infoMenu.setState({ shown: true });
    }

    render() {
	const classes = ClassNames('content',`content-${this.props.name}`,{
            'content-main-with-info': this.state.menuShown
        });
        const hamClasses = ClassNames('ham','ham-main',{
	    'ham-main-active': this.state.menuShown
        });
	return (
            <div className={classes}>
              {<div className={hamClasses} onClick={(e) => this.toggleInfoMenu(e)}>{'\u2630'}</div>}
              {this.props.panels}
              {<InfoMenu visible={this.state.menuShown}/>}
            </div>
        );
    }
}
