import styled from 'styled-components';
import { CopySvg } from './svgs/copySvg';
import { useState } from 'react';

const Container = styled.div`
  background: #fafafa;
  border: 1px solid #e3e3e3;
  padding: 1em;
  border-radius: 0.25em;
  display: flex;
  gap: 1.5em;
  align-items: center;
`;

const Text = styled.span`
  font-size: 20px;
  font-family: Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
  color:#767676;
`;

const IconWrapper = styled.div`
  height: 1.25em;
  width: 1.25em;
`;

const Copy = styled.div`
  cursor: pointer;
  font-weight: 600;
  display: flex;
  gap: 0.5em;
  align-items: center;
  opacity: 0.4;

  &:hover{
    opacity: 1;
    color:#767676;
    svg{
      fill:#767676;
    }
  }
`;

const CopyText = styled.span`
  font-size: 18px;
`;

const CopiedText = styled.span`
  color: #04AA6D;
  font-size: 18px;
  font-weight: 600;
`;

export type CodeBoxProps = {
  text: string,
}

export function CodeBox(props: CodeBoxProps) {
  const [copying, setCopying] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(props.text);
    setCopying(true);
    setTimeout(() => {
      setCopying(false);
    }, 4000)
  };

  return (
    <Container>
      <Text>{props.text}</Text>
      {copying ?
        <CopiedText>Copied!</CopiedText> :
        <Copy onClick={copyToClipboard}>
          <CopyText>Copy</CopyText>
          <IconWrapper><CopySvg /></IconWrapper>
        </Copy>
      }
    </Container>
  );
}