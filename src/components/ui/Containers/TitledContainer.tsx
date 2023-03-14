import * as Styles from './index';

interface TitledContainerProps {
  children: React.ReactNode;
  title: string;
}

function TitledContainer({ children, title }: TitledContainerProps) {
  return (
    <Styles.TitledContainer>
      <Styles.TitledContainerTitle variant="h1">
        {title}
      </Styles.TitledContainerTitle>

      <Styles.TitledContainerMain>{children}</Styles.TitledContainerMain>
    </Styles.TitledContainer>
  );
}

export default TitledContainer;
