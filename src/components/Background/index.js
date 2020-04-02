import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export default styled(LinearGradient).attrs({
  colors: ['rgba(107,107,107,1)', 'rgba(255,153,0,0.5)'],
})`
  flex: 1;
`;
