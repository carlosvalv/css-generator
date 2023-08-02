import styled from 'styled-components';

const Container = styled.div`
  background: #fafafa;
  border: 1px solid #e3e3e3;
  padding: 1em;
`;

const Text = styled.span`
  font-size: 20px;
  font-family: Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
  color: #000;
`;

export type CodeBoxProps = {
  text: string,
}

export function CodeBox(props: CodeBoxProps) {

  return (
    <Container>
        <Text>{props.text}</Text>
    </Container>
  );
}