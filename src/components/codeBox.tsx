import styled from 'styled-components';
import { useState } from 'react';
import CopySvg from './svgs/copySvg';

const Container = styled.div<{ multiline: number }>`
  background: ${(props) => props.theme.colors.secondary500};
  border: 1px solid ${(props) => props.theme.colors.secondary700};
  border-radius: 0.25em;
  display: flex;
  gap: 1.5em;
  align-items: center;
  padding: ${(props) => (props.multiline ? '2.5em' : '1.5em')};
  position: relative;
  min-width: 200px;
  @media (max-width: 800px) {
    padding: 1.5em;
  }
`;

const Text = styled.span<{ multiline: number }>`
  font-size: 20px;
  font-family:
    Consolas,
    Monaco,
    Andale Mono,
    Ubuntu Mono,
    monospace;
  color: ${(props) => props.theme.colors.secondary900};
  ${(props) => props.multiline === 1 && 'white-space: pre;'};
  tab-size: 4;

  @media (max-width: 800px) {
    white-space: inherit;
  }
`;

const IconWrapper = styled.div`
  height: 1.25em;
  width: 1.25em;
`;

const Copy = styled.div<{ corner: number; copying: number }>`
  cursor: ${(props) => (props.copying ? 'inherit' : 'pointer')};
  font-weight: 600;
  display: flex;
  gap: 0.5em;
  align-items: center;
  opacity: ${(props) => (props.copying === 1 ? '1' : '0.4')};
  ${(props) => props.corner === 1 && 'position: absolute'};
  ${(props) => props.corner === 1 && 'top: 0.75em'};
  ${(props) => props.corner === 1 && 'right: 0.75em'};
  &:hover {
    opacity: 1;
    color: ${(props) => props.theme.colors.secondary900};
    svg {
      fill: ${(props) => props.theme.colors.secondary900};
    }
  }

  @media (max-width: 800px) {
    position: inherit;
  }
`;

const CopyText = styled.span`
  font-size: 18px;
`;

const CopiedText = styled.span`
  color: ${(props) => props.theme.colors.success};
  font-size: 18px;
  font-weight: 600;
`;

export type CodeBoxProps = {
  text: string;
  multiLine: boolean;
};

export function CodeBox(props: CodeBoxProps) {
  const [copying, setCopying] = useState(false);
  const { text, multiLine } = props;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    setCopying(true);
    setTimeout(() => {
      setCopying(false);
    }, 4000);
  };

  return (
    <Container multiline={multiLine ? 1 : 0}>
      <Text className="code-text" multiline={multiLine ? 1 : 0}>
        {text}
      </Text>
      <Copy onClick={copyToClipboard} corner={multiLine ? 1 : 0} copying={copying ? 1 : 0}>
        {copying ? (
          <CopiedText>Copied!</CopiedText>
        ) : (
          <>
            <CopyText>Copy</CopyText>
            <IconWrapper>
              <CopySvg />
            </IconWrapper>
          </>
        )}
      </Copy>
    </Container>
  );
}
