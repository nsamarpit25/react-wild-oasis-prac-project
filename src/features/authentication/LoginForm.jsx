import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import styled from "styled-components";

const TestCredentials = styled.div`
 padding: 1.2rem 2.4rem;
 background-color: var(--color-grey-100);
 border-radius: var(--border-radius-md);
 margin-bottom: 2.4rem;

 p {
  font-size: 1.4rem;
  color: var(--color-grey-600);
 }

 p:last-child {
  margin-top: 0.4rem;
 }
`;

export function LoginForm() {
 const [email, setEmail] = useState("test@example.com");
 const [password, setPassword] = useState("asdf1234");
 const { login, isLoading } = useLogin();

 function handleSubmit(e) {
  e.preventDefault();
  if (!email || !password) return;
  login(
   { email, password },
   {
    onSettled: () => {
     setEmail("");
     setPassword("");
    },
   }
  );
 }

 return (
  <>
   <TestCredentials>
    <p>👋 Test credentials for demo:</p>
    <p>Email: test@example.com</p>
    <p>Password: asdf1234</p>
   </TestCredentials>

   <Form onSubmit={handleSubmit}>
    <FormRowVertical label="Email address">
     <Input
      type="email"
      id="email"
      // This makes this form better for password managers
      autoComplete="username"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      disabled={isLoading}
     />
    </FormRowVertical>
    <FormRowVertical label="Password">
     <Input
      type="password"
      id="password"
      autoComplete="current-password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      disabled={isLoading}
     />
    </FormRowVertical>
    <FormRowVertical>
     <Button
      size="large"
      disabled={isLoading}
     >
      {isLoading ? <SpinnerMini /> : "Login"}
     </Button>
    </FormRowVertical>
   </Form>
  </>
 );
}
