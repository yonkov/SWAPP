import React from 'react';
import { Box, Button, Card } from 'rebass';
import { Input } from '@rebass/forms';
import './LoginForm.css'

export default class LoginForm extends React.Component {
  state = { email: '', password:'' };

  onChange = ({ target: { value: email } }) => {
    this.setState({ email });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.login({ variables: { email: this.state.email, password: this.state.password } });
  };

  render() {
    
    return (
      <section className="login-form">
        <h1 class='logo' onClick={this.props.toggleTheme.toggleTheme}>SWAPP</h1>
        <Card
        width={[400]}
        as="form"
        onSubmit={this.handleSubmit}
        mx="auto"
        my={3}
      >
        <Box p={1}>
          <Box mb={3}>
            <Input
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              placeholder="Email"
              my={3}
            />
            <Input
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
                type="password"
                placeholder="Enter your password"
          />
          </Box>
          <Box px={5} ml="auto">
            <Button type="submit" >Login</Button>
          </Box>
        </Box>
      </Card>
      </section>
      
      
    );
  }
}
