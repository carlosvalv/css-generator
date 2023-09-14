import styled from 'styled-components';
import { CopySvg } from './svgs/copySvg';
import { useState } from 'react';

const Container = styled.div`
  background: ${props => props.theme.colors.secondary500};
  border: 1px solid ${props => props.theme.colors.secondary700};
  border-radius: 0.25em;
  display: flex;
  gap: 1.5em;
  align-items: center;
  padding: 1em;
  position: relative;
`;

const Text = styled.span<{ multiline: boolean }>`
  font-size: 20px;
  font-family: Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
  color: ${props => props.theme.colors.secondary900};
  ${props => props.multiline && "white-space: pre;"};
  tab-size: 4;
`;

const IconWrapper = styled.div`
  height: 1.25em;
  width: 1.25em;
`;

const Copy = styled.div<{ corner: boolean, copying: boolean }>`
  cursor: ${props => props.copying ? "inherit" : "pointer"};
  font-weight: 600;
  display: flex;
  gap: 0.5em;
  align-items: center;
  opacity: ${props => props.copying ? "1" : "0.4"};
  ${props => props.corner && "position: absolute"};
  ${props => props.corner && "top: 0.75em"};
  ${props => props.corner && "right: 0.75em"};
  &:hover{
    opacity: 1;
    color: ${props => props.theme.colors.secondary900};
    svg{
      fill: ${props => props.theme.colors.secondary900};
    }
  }
`;

const CopyText = styled.span`
  font-size: 18px;
`;

const CopiedText = styled.span`
  color:  ${props => props.theme.colors.success};
  font-size: 18px;
  font-weight: 600;
`;

export type CodeBoxProps = {
  text: string,
  multiLine: boolean
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
      <Text multiline={props.multiLine}>{props.text}</Text>
      <Copy onClick={copyToClipboard} corner={props.multiLine} copying={copying}>
        {copying ?
          <CopiedText>Copied!</CopiedText>
          :
          <>
            <CopyText>Copy</CopyText>
            <IconWrapper><CopySvg /></IconWrapper>
          </>
        }
      </Copy>
    </Container>
  );
}