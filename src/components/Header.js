import PropTypes from 'prop-types';
import Button from './Button';

function Header({ title }) {
  const onClick = () => {
    // can also use event object (e) =>
    console.log('Click');
  };

  return (
    <header className="header">
      {/* <h1 style={headingStyle}>{title}</h1> */}
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick = {onClick}/>
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
