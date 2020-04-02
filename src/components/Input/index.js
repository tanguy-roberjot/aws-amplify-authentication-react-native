import React, { forwardRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { Container, TInput } from './styles';

function Input({ style, icon, iconColor, ...rest }, ref) {
  return (
    <Container style={style}>
      {icon && (
        <Icon
          name={icon}
          size={20}
          color={iconColor || 'rgba(255, 255, 255, 0.6)'}
        />
      )}
      <TInput {...rest} ref={ref} />
    </Container>
  );
}

Input.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  iconColor: PropTypes.string,
};

Input.defaultProps = {
  style: {},
  icon: null,
  iconColor: null,
};

export default forwardRef(Input);
