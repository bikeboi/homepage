import * as React from 'react';
import * as ClassNames from 'classnames';

class InfoMenu extends React.Component {
    render() {
	const classes = ClassNames('info-menu', {
	    'info-menu-shown': this.props.visible
        });
	return (
            <div className={classes}>
              <div className="info-menu-logo">{this.props.logo}</div>
              <div className="info-menu-info">{this.props.info}</div>
            </div>
        );
    }
}

export class Content extends React.Component {
    constructor(props) {
	super(props);
        this.state = { menuShown: false };
    }

    toggleInfoMenu() {
	this.setState({ menuShown: !(this.state.menuShown) });
    }

    render() {
	const classes = ClassNames('content',`content-${this.props.name}`);
        const hamClasses = ClassNames('ham','ham-main',{
	    'ham-main-active': this.state.menuShown
        });
        const panelContainerClasses = ClassNames('main-panels', {
	    'main-panels-shrunk': this.state.menuShown
        });
	return (
            <div className={classes}>
              <div className={panelContainerClasses}>
		{this.props.panelTL}{this.props.panelTR}
                {this.props.panelBL}{this.props.panelBR}
              </div>
              {this.props.panels}
              {<InfoMenu visible={this.state.menuShown}
			 logo={<img src="api/resources/img/logo.png" />}
                         info={'Michael Kareithi'}/>}
              {<div className={hamClasses} onClick={(e) => this.toggleInfoMenu(e)}>{'\u2630'}</div>}
            </div>
        );
    }
}
