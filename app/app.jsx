/* Exercice 1 */
var MyComponent = React.createClass({
	render: function() {
		return (
			<div>
				<h1>{this.props.text}</h1>
				<p>{this.props.children}</p>
			</div>
			);
	}
});

/*ReactDOM.render(<div>
				<MyComponent text="Hello World">
				Hello too.
				</MyComponent>
				<MyComponent text="How are you?">
				Fine and you?
				</MyComponent>
				</div>, $('#container_exo1')[0]);*/

/* Exercice 2 */
var Note = React.createClass({
	getInitialState: function() {
		return {editing: false}
	},
	edit: function() {
		this.setState({editing: true});
	},
	save: function() {
		this.props.onChange(this.refs.newText.value, this.props.index);
		this.setState({editing: false});
	},
	remove: function() {
		this.props.onRemove(this.props.index);
	},
	renderDisplay: function() {
		return (
			<div className="myClassNote">
				<span onClick={this.edit}>
				{this.props.children}
				</span>
				<p><button onClick={this.remove}>Remove</button></p>
			</div>
			);
	},
	renderForm: function() {
		return (
			<div className="myClassForm">
			<textarea ref="newText" defaultValue={this.props.children}></textarea>
			<p><button onClick={this.save}>Save</button></p>
			</div>
			);
	},
	render: function() {
		if(this.state.editing) {
			return this.renderForm();
		} 
		else {
			return this.renderDisplay();
		}
	}
});

var Board = React.createClass({
	getInitialState: function() {
		return {
			notes: []
		}
	},
	add: function(text) {
		var arr = this.state.notes;
		arr.push(text);
		this.setState({notes: arr});
	},
	update: function(newText, i) {
		var arr = this.state.notes;
		arr[i] = newText;
		this.setState({notes: arr});
	},
	remove: function(i) {
		var arr = this.state.notes;
		arr.splice(i, 1);
		this.setState({notes: arr});
	},
	eachNote: function(note, i) {
		return (
			<Note key={i}
				index={i}
				onChange={this.update}
				onRemove={this.remove}
			>{note}</Note>
			);
	},
	render: function() {
		return (
				<div className="myBoard">
					<button onClick={this.add.bind(null, "New note")}>Add notes</button>
					{this.state.notes.map(this.eachNote)}
				</div>
			);
	}
});

// ReactDOM.render(<Board />, $('#container_exo2')[0]);

/* Exercice 3 */
var Box = React.createClass({
	componentWillMount: function() {
		alert('Will mount..');
	},
	componentDidMount: function() {
		alert('Did mount!');
	},
	render: function() {
		return <div></div>;
	}
});

ReactDOM.render(<Box />, $('#container_exo3')[0]);

var $boxes = $('#container_exo3 div');

$boxes.click(function(){
	ReactDOM.unmountComponentAtNode($('#container_exo3')[0]);
	alert('Unmount component!');
});



