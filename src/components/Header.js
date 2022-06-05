import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from './Button';

function Header({ title, onAdd, showAdd }) {
  // can also use event object (e) =>

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className="header">
      {/* <h1 style={headingStyle}>{title}</h1> */}
      <h1>{title}</h1>
      {location.pathname === '/' ? <Button
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}
      /> : <Button 
        onClick={() => {
          navigate('/');
        }}
        text='Go Back'
      />}
    </header>
  );
}

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// };

export default Header;
