import React from 'react';
import { Box, Button, Card } from 'rebass';
import { Input } from '@rebass/forms';

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
      <Card
        width={[400]}
        as="form"
        onSubmit={this.handleSubmit}
        mx="auto"
        my={4}
      >
        <Box p={1}>
          <Box mb={3}>
            <Input
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              placeholder="email"
            />
            <Input
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
                type="password"
                placeholder="Choose a safe password"
          />
          </Box>
          <Box px={2} ml="auto">
            <Button type="submit">Log In</Button>
          </Box>
        </Box>
      </Card>
    );
  }
}
