import * as React from "react";

import {Button, Divider, FormControl, TextField} from "material-ui";

export interface LoginFormProps {
	onLogin: (email: string, password: string) => any;
	onReset: (email: string) => any;
}

export class LoginForm extends React.PureComponent<LoginFormProps, State> {

	public constructor(props: LoginFormProps) {
		super(props);
		this.state = {
			reset: false,
			email: "",
			password: ""
		};
	}

	public render(): JSX.Element {
		return (
			<form>
				{this.state.reset ? this.renderReset() : this.renderLogin()}
			</form>
		);
	}

	private renderLogin(): JSX.Element {
		return (
			<FormControl>
				<TextField
					label="Email"
					style={{marginTop: 50}}
					name="email"
					type="email"
					value={this.state.email}
					onChange={this.updateEmail}
				/>
				<TextField
					label="Password"
					type="password"
					name="password"
					value={this.state.password}
					onChange={this.updatePassword}
				/>
				<Button
					color="primary"
					variant="raised"
					style={{margin: 20}}
					onClick={this.login}
				>
					Login
				</Button>
				<Divider/>
				<Button
					size="small"
					style={{margin: 10, cursor: "pointer", color: "#777"}}
					onClick={this.switchToReminder}
				>
					Remind password
				</Button>
			</FormControl>
		);
	}

	private renderReset(): JSX.Element {
		return (
			<FormControl>
				<TextField
					label="Email"
					style={{marginTop: 50}}
					name="email"
					type="email"
					value={this.state.email}
					onChange={this.updateEmail}
				/>
				<Button
					color="primary"
					variant="raised"
					style={{margin: 20}}
					onClick={this.reset}
				>
					Reset password
				</Button>
				<Divider/>
				<Button
					size="small"
					style={{margin: 10, cursor: "pointer", color: "#777"}}
					onClick={this.switchToLogin}
				>
					Back
				</Button>
			</FormControl>
		);
	}

	private updateEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({email: event.currentTarget.value});
	};

	private updatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({password: event.currentTarget.value});
	};

	private switchToReminder = () => {
		this.setState({reset: true, password: ""});
	};

	private switchToLogin = () => {
		this.setState({reset: false});
	};

	private login = () => {
		this.props.onLogin(this.state.email, this.state.password);
	};

	private reset = () => {
		this.props.onReset(this.state.email);
	};
}

interface State {
	reset: boolean;
	email: string;
	password: string;
}
